from rest_framework import serializers
from .models import SmokingSurvey

# Serializer will convert JSON to Smoking Survey Model
class SmokingSurveySerializer(serializers.ModelSerializer):

    # Set boolean value to NULL if is_incapacitated attribute is not received
    is_incapacitated = serializers.BooleanField(allow_null=True, default=None, required=False)
    
    class Meta:
        model = SmokingSurvey
        fields = '__all__'