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
	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'password', 'email', 'group', 'is_superuser')

	def create(self, validated_data):
		group_validated_data = validated_data.pop('group')
		user = User.objects.create(**validated_data)
		group_serializer = self.fields['group']
		groups = group_serializer.create(group_validated_data)
		return user
