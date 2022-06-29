from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Todo, User

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(User, UserAdmin)