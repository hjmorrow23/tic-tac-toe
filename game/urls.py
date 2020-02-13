from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='game-home'),
    path('login/', views.login, name='game-login'),
    path('test/', views.test, name='test')
]