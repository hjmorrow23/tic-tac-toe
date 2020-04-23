from rest_framework import serializers
from django.contrib.auth.models import User, Group

from .models import Game, Player

class UserSerializer(serializers.ModelSerializer):
    # games = serializers.PrimaryKeyRelatedField(many=True, queryset=Game.objects.all())

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Player
        fields = ['id', 'name', 'wins', 'losses', 'ties']

class GameSerializer(serializers.ModelSerializer):
    # winner = PlayerSerializer(allow_null=True)
    # creator = serializers.ReadOnlyField(source='creator.username')
    # winner = serializers.SlugRelatedField(
    #     slug_field='name',
    #     read_only=True,
    # )

    class Meta: 
        model = Game
        fields = ['id', 'winner', 'number_of_moves', 'date_started']