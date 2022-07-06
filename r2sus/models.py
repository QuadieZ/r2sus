from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class User(AbstractUser):
    pass

class Rank(models.Model):
    userId = models.CharField(max_length=7)
    username = models.CharField(max_length=20)
    score = models.CharField(max_length=20)

    def _str_(self):
        return self.userId

