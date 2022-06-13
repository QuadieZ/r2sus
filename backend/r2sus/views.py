from django.shortcuts import render
from rest_framework import viewsets
from .serializers import R2susSerializer
from .models import Todo

# Create your views here.

class R2susView(viewsets.ModelViewSet):
    serializer_class = R2susSerializer
    queryset = Todo.objects.all()