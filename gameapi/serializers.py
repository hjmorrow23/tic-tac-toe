from rest_framework import serializers
from django.contrib.auth.models import User, Group

from .models import Game, Player

class UserSerializer(serializers.HyperlinkedModelSerializer):
    # games = serializers.PrimaryKeyRelatedField(many=True, queryset=Game.objects.all())

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Player
        fields = ['name', 'wins', 'losses', 'ties']

class GameSerializer(serializers.HyperlinkedModelSerializer):
    # creator = serializers.ReadOnlyField(source='creator.username')

    class Meta: 
        model = Game
        fields = ['winner', 'number_of_moves', 'date_started', 'creator']