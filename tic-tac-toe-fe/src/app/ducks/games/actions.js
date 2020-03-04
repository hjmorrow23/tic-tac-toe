import { createAction } from 'typesafe-actions'

export const getGamesList = createAction('games/GET_GAMES', resolve => {
    return () => resolve();
})

export const setGamesList = createAction('games/SET_GAMES', resolve => {
    return (games) => resolve(games);
})

export const setGamesListError = createAction('games/SET_GAMES_ERROR', resolve => {
    return (err) => resolve(err);
})

export const resetState = createAction('games/RESET_STATE', resolve => {
    return () => resolve();
});