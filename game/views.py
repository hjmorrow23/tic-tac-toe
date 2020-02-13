from django.shortcuts import render
from django.http import HttpResponse
from .models import Game, Player
from .ui import test_button

def home(request): 
    context = {
        'games': Game.objects.all()
    }
    return render(request, 'game/home.html', context)

def login(request): 
    return render(request, 'game/login.html')

def test(request):
    print('BUTTON')
    context = {
        'games': Game.objects.all()
    }
    return render(request, 'game/home.html', context)
