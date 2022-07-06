from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Todo, User, Rank

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class RankAdmin(admin.ModelAdmin):
    list_display = ('userId', 'username', 'score')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Rank, RankAdmin)