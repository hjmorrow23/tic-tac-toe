from django.test import TestCase
from rest_framework.test import APIRequestFactory, APIClient
from rest_framework import status
from django.urls import reverse
from .models import Player, Game, User
from .serializers import PlayerSerializer, GameSerializer
import datetime
from django.utils.timezone import now

class PlayerAPICrudTestCase(TestCase):
    # Test CRUD Ops for Player endpoints

    def setUp(self):
        self.jordan = Player.objects.create(
            name='Jordan', wins=6, losses=0, ties=0
        )
        self.lebron = Player.objects.create(
            name="Lebron", wins=4, losses=2, ties=0
        )
        self.valid_payload = {
            'name': 'Testy brooster',
            'wins': 5,
            'losses': 0,
            'ties': 0
        }
        self.invalid_payload = {
            'name': '',
            'wins': 5,
            'losses': 0,
            'ties': 0
        }
        self.client = APIClient()

    # GET All
    def test_player_list_get(self):
        url = reverse('player-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    #POST
    def test_player_post(self):
        url = reverse('player-list')
        response = self.client.post(url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, self.valid_payload)
    
    def test_invalid_player_post(self):
        url = reverse('player-list')
        response = self.client.post(url, self.invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # GET Single
    def test_player_get(self):
        url = reverse('player-detail', kwargs={'pk': self.jordan.pk})
        response = self.client.get(url)
        player = Player.objects.get(pk=self.jordan.pk)
        serializer = PlayerSerializer(player)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_invalid_player_get(self):
        url = reverse('player-detail', kwargs={'pk': 55})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    #PUT Single
    def test_player_put(self):
        url = reverse('player-detail', kwargs={'pk': self.jordan.pk})
        response = self.client.put(url, self.valid_payload)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_invalid_player_put(self):
        url = reverse('player-detail', kwargs={'pk': self.jordan.pk})
        response = self.client.put(url, self.invalid_payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    #Delete Single
    def test_player_delete(self):
        url = reverse('player-detail', kwargs={'pk': self.jordan.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
    
    def test_invalid_player_delete(self):
        url = reverse('player-detail', kwargs={'pk': 55})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class GameAPICrudTestCase(TestCase):
    # Test CRUD Ops for Game endpoints

    def setUp(self):
        self.jordan = Player.objects.create(
            name='Jordan', wins=6, losses=0, ties=0
        )
        self.lebron = Player.objects.create(
            name="Lebron", wins=4, losses=2, ties=0
        )
        self.curry = User.objects.create_user(
            username='curry'
        )
        self.kawhi = User.objects.create_user(
            username='kawhi'
        )
        self.first_game = Game.objects.create(
            winner=self.jordan, number_of_moves=6
        )
        self.second_game = Game.objects.create(
            winner=self.lebron, number_of_moves=8
        )
        self.valid_payload = {
            'winner': self.jordan.pk,
            'number_of_moves': 5,
        }
        self.invalid_payload = {
            'winner': '',
            'number_of_moves': 5
        }
        self.client = APIClient()

    # GET All
    def test_game_list_get(self):
        url = reverse('game-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    #POST
    def test_game_post(self):
        url = reverse('game-list')
        response = self.client.post(url, self.valid_payload)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, self.valid_payload)
    
    def test_invalid_game_post(self):
        url = reverse('game-list')
        response = self.client.post(url, self.invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # GET Single
    def test_game_get(self):
        url = reverse('game-detail', kwargs={'pk': self.first_game.pk})
        response = self.client.get(url)
        # game = Game.objects.get(pk=self.jordan.pk)
        # serializer = GameSerializer(game, context={'request', self.client.request})
        # self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_invalid_game_get(self):
        url = reverse('game-detail', kwargs={'pk': 55})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    #PUT Single
    def test_game_put(self):
        url = reverse('game-detail', kwargs={'pk': self.first_game.pk})
        response = self.client.put(url, self.valid_payload)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_invalid_game_put(self):
        url = reverse('game-detail', kwargs={'pk': self.first_game.pk})
        response = self.client.put(url, self.invalid_payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    #Delete Single
    def test_game_delete(self):
        url = reverse('game-detail', kwargs={'pk': self.first_game.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
    
    def test_invalid_game_delete(self):
        url = reverse('game-detail', kwargs={'pk': 55})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        

