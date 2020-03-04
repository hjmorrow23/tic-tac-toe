from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Player(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    wins = models.IntegerField()
    losses = models.IntegerField()
    ties = models.IntegerField()

    objects = models.Manager()

    def __str__(self):
        return self.name

class Game(models.Model):
    id = models.AutoField(primary_key=True)
    winner = models.ForeignKey(Player, on_delete=models.CASCADE)
    number_of_moves = models.IntegerField()
    date_started = models.DateTimeField(default=timezone.now)
    # creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='gamemaker')

    objects = models.Manager()

    def __str__(self):
        return self.winner.name