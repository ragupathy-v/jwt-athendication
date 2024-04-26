from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import userserializer,noteserializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import note
# Create your views here.


class registerview(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=userserializer
    permission_classes=[AllowAny]


class notelistcreate(generics.ListCreateAPIView):
    serializer_class=noteserializer
    permission_classes=[IsAuthenticated]


    def get_queryset(self):
        user=self.request.user
        return note.objects.filter(author=user)

    def perform_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print (serializer.errors)

class deletenote(generics.DestroyAPIView):
    serializer_class=noteserializer
    permission_classes=IsAuthenticated

    def get_queryset(self):
        user=self.request.user
        return note.objects.filter(author=user)