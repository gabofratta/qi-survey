from django.urls import path
from survey import views

urlpatterns = [
    path('other/<str:source>', views.other_survey, name='other_survey'),
    path('socios/<str:linker>', views.socios_survey, name='socios_survey'),
    path('ajax/post_response', views.post_response, name='post_response'),
]