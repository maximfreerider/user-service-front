from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import UserGroup, CustomUser


User = get_user_model()

class GroupSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserGroup
		fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    group = GroupSerializer()
	# group = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'password', 'email', 'group', 'is_superuser')
