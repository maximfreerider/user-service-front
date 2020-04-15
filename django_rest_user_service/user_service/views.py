from rest_framework import generics, mixins
from user_service.serializers import UserSerializer, GroupSerializer
from django.contrib.auth import get_user_model
from .models import UserGroup


User = get_user_model()


class UserCreateView(generics.CreateAPIView):
    serializer_class = UserSerializer


class UserView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class GroupView(generics.ListAPIView):
	serializer_class = GroupSerializer
	queryset = UserGroup.objects.all()


class GroupCreateView(generics.CreateAPIView):
	serializer_class = GroupSerializer



class DetailUserView(generics.UpdateAPIView, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def get(self, request, pk):
        return self.retrieve(request, pk)
    def delete(self, request, pk):
        return self.destroy(request, pk)
