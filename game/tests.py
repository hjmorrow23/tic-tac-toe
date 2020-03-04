from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework import status
from django.urls import reverse

factory = APIRequestFactory()

# Create your tests here.
class PlayerAPICrudTestCase(TestCase):
    def setUp(self):
        self.name = 'Testy brooster'
        self.wins = 5
        self.losses = 0
        self.ties = 0
    
    def test_player_crud(self):
        url = reverse('players')
        data = {
            'name': 'Testy brooster',
            'wins': 5,
            'losses': 0,
            'ties': 0
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, data)