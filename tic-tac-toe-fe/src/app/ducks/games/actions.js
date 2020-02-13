import { createAction } from 'typesafe-actions'

export const getGamesList = createAction('games/GET_GAMES', resolve => {
    return () => resolve();
})

export const setGamesList = createAction('games/SET_GAMES', resolve => {
    return (games) => resolve(games);
})

export const setGamesListError = createAction('games/SET_GAMES_ERROR', resolve => {
    return (games) => resolve(games);
})