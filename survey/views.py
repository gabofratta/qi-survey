from django.shortcuts import render
from django.http import HttpResponseForbidden

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import SmokingSurvey
from .serializers import SmokingSurveySerializer

# Render survey view
def survey(request, context={}):
    return render(request, 'survey.html', context)

# Render already submitted view
def submitted(request):
    return render(request, 'submitted.html', {})

# Render blank survey for a source outside socios
@api_view(['GET'])
def other_survey(request, source):
    if source is None or source in ['', 'socios']:
        return HttpResponseForbidden()
    return survey(request, {'source': source})

# Render blank survey or already submitted page for socios
@api_view(['GET'])
def socios_survey(request, linker):
    if linker is None or linker == '':
        return HttpResponseForbidden()
    if SmokingSurvey.objects.filter(linker=linker).exists():
        return submitted(request)
    return survey(request, {'linker': linker, 'source': 'socios'})

# Check if a given email has already filled out the survey
@api_view(['GET'])
def email_exists(request):
    if request.method != 'GET' or 'email' not in request.GET:
        return HttpResponseForbidden()
    email = request.GET['email']
    return Response({"success": True, 
        "exists": SmokingSurvey.objects.filter(email=email).exists()})

# Convert and save smoking habits survey response to database
@api_view(['POST'])
def post_response(request):
    serializer = SmokingSurveySerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        survey_saved = serializer.save()
    return Response({"success": "Survey {} saved".format(survey_saved.id), 
        "qualifies": survey_saved.qualifies()})