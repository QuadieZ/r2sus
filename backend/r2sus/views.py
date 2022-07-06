from django.shortcuts import render
from rest_framework import viewsets
from .serializers import R2susSerializer, RankSerializer
from .models import Todo, Rank

# Create your views here.

class R2susView(viewsets.ModelViewSet):
    serializer_class = R2susSerializer
    queryset = Todo.objects.all()

class RankView(viewsets.ModelViewSet):
    serializer_class = RankSerializer
    queryset = Rank.objects.all()