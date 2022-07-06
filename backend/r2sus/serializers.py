from rest_framework import serializers
from .models import Todo, Rank

class R2susSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = ('userId','username', 'score')