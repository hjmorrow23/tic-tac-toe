from rest_framework import viewsets, status
from django.contrib.auth.models import User, Group
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, GroupSerializer, GameSerializer, PlayerSerializer
from .models import Game, Player

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all().order_by('date_started')
    serializer_class = GameSerializer

    # def perform_create(self, serializer):
    #     serializer.save(creator=self.request.user)

# class GameList(APIView):
#     #List all Games or create new Game
    
#     def get(self, request, format=None):
#         games = Game.objects.all()
#         serializer = GameSerializer(games, many=True)
#         return Response(serializer.data)
        
#     def post(self, request, format=None):
#         serializer = GameSerializer(data=request.data)
#         if serializer.is_valid(): 
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def perform_create(self, serializer):
#         serializer.save(creator=self.request.user)

# class GameDetail(APIView):
#     #Retrieve, update or delete a game

#     def get_object(self, pk):
#         try:
#             return Game.objects.get(pk=pk)
#         except Game.objects.DoesNotExist:
#             raise Http404
    
#     def get(self, request, pk, format=None):
#         game = self.get_object(pk)
#         serializer = GameSerializer(game)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         game = self.get_object(pk)
#         serializer = GameSerializer(game, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status==status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         game = self.get_object(pk)
#         game.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# class PlayerList(APIView):
#     #List all Players or create new Player
    
#     def get(self, request, format=None):
#         players = Player.objects.all()
#         serializer = PlayerSerializer(players, many=True)
#         return Response(serializer.data)
        
#     def post(self, request, format=None):
#         serializer = PlayerSerializer(data=request.data)
#         if serializer.is_valid(): 
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class PlayerDetail(APIView):
#     #Retrieve, update or delete a player

#     def get_object(self, pk):
#         try:
#             return Player.objects.get(pk=pk)
#         except Player.objects.DoesNotExist:
#             raise Http404
    
#     def get(self, request, pk, format=None):
#         player = self.get_object(pk)
#         serializer = PlayerSerializer(player)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         player = self.get_object(pk)
#         serializer = PlayerSerializer(player, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status==status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         player = self.get_object(pk)
#         player.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# @api_view(['GET', 'POST'])
# def game_list(request, format=None):
#     if request.method == 'GET':
#         games = Game.objects.all()
#         serializer = GameSerializer(games)
#         return JsonResponse(serializer.data)
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = GameSerializer(data=data)
#         if serializer.is_valid(): 
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)

# @api_view(['GET', 'PUT', 'DELETE'])
# def game_detail(request, pk, format=None):
#     try:
#         game = Game.objects.get(pk=pk)
#     except Game.objects.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == 'GET':
#         serializer = GameSerializer
#         return JsonResponse(serializer.data)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = GameSerializer(game, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         game.delete()
#         return HttpResponse(status=204)

# @api_view(['GET', 'POST'])
# def player_list(request, format=None):
#     if request.method == 'GET':
#         players = Player.objects.all()
#         serializer = PlayerSerializer(players)
#         return JsonResponse(serializer.data)
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = PlayerSerializer(data=data)
#         if serializer.is_valid(): 
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)

# @api_view(['GET', 'PUT', 'DELETE'])
# def player_detail(request, pk, format=None):
#     try:
#         player = Player.objects.get(pk=pk)
#     except Player.objects.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == 'GET':
#         serializer = PlayerSerializer
#         return JsonResponse(serializer.data)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = PlayerSerializer(player, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         player.delete()
#         return HttpResponse(status=204)

