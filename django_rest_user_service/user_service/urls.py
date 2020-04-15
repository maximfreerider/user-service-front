from django.urls import path
from .views import UserCreateView, UserView, GroupCreateView, GroupView, DetailUserView


urlpatterns = [
    path('user/create/', UserCreateView.as_view()),
    path('user/', UserView.as_view()),
    path('user/<int:pk>/', DetailUserView.as_view()),
    path('group/create/', GroupCreateView.as_view()),
    path('group/', GroupView.as_view()),
]
