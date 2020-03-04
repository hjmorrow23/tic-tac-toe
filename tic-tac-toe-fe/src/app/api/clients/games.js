import { apiBase } from '../ApiBase';
export const BASE_URL = '/games';

//Get a list of games
const getGames = () => apiBase.client.get(`${BASE_URL}`);

//Get a single game
const getGame = (id) => apiBase.client.get(`${BASE_URL}/${id}`)


export const Games = {
    getGames,
    getGame
}