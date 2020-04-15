from django.db import models
from django.contrib.auth.models import AbstractUser



class CustomUser(AbstractUser):
	group = models.ForeignKey('UserGroup', on_delete=models.CASCADE, blank=True, null=True)


class UserGroup(models.Model):
	data_analytics = models.BooleanField(default=False)
	voice_analytics = models.BooleanField(default=False)
	queue_stats = models.BooleanField(default=False)
	voice_stats = models.BooleanField(default=False)
	video = models.BooleanField(default=False)
	smart_access = models.BooleanField(default=False)
	diagrams = models.BooleanField(default=False)
	name_of_group = models.CharField(max_length=150, unique=True, null=True, blank=True)
