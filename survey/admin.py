from django.contrib import admin
from survey.models import SmokingSurvey, SmokingSurveyPrompts

class SurveyAdmin(admin.ModelAdmin):
    pass

admin.site.register(SmokingSurvey, SurveyAdmin)
admin.site.register(SmokingSurveyPrompts, SurveyAdmin)