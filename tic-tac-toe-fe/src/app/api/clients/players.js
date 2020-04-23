import { apiBase } from '../ApiBase';
export const BASE_URL = '/players';

//Get a list of players
const getPlayers = () => apiBase.client.get(`${BASE_URL}`);

//Get a single player
const getPlayer = (id) => apiBase.client.get(`${BASE_URL}/${id}`);

//add player
const addPlayer = (player) => apiBase.client.post(`${BASE_URL}/`, player);

//update player
const updatePlayer = (payload) => apiBase.client.put(`${BASE_URL}/${payload[0]}/`, payload[1]);


export const Players = {
    getPlayers,
    getPlayer,
    addPlayer,
    updatePlayer
}