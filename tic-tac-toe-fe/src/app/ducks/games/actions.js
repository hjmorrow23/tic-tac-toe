import { createAction } from 'typesafe-actions'

export const getGamesList = createAction('games/GET_GAMES', resolve => {
    return () => resolve();
})

export const setGamesList = createAction('games/SET_GAMES', resolve => {
    return (games) => resolve(games);
})

export const setGamesListError = createAction('games/SET_GAMES_ERROR', resolve => {
    return (err) => resolve(err);
});

export const getGame = createAction('games/GET_GAME', resolve => {
    return (id) => resolve(id);
});

export const setGame = createAction('games/SET_GAME', resolve => {
    return (game) => resolve(game);
});

export const addGame = createAction('games/ADD_GAME', resolve => {
    return (game) => resolve(game);
});

export const setGameError = createAction('games/SET_GAME_ERROR', resolve => {
    return (err) => resolve(err);
});

export const resetState = createAction('games/RESET_STATE', resolve => {
    return () => resolve();
});