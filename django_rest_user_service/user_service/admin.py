from django.contrib import admin
from .models import UserGroup


@admin.register(UserGroup)
class UserModelAdmin(admin.ModelAdmin):
	pass