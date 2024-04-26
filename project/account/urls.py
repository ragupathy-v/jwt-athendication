from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/',views.registerview.as_view() ,name='register__user'),
    path('createnote/',views.notelistcreate.as_view(),name='note_list'),
    path('delete/<int:pk>/',views.deletenote.as_view(),name='delet_note'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
]
