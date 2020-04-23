import { createAction } from 'typesafe-actions'

export const getPlayerList = createAction('players/GET_PLAYERS', resolve => {
    return () => resolve();
});

export const setPlayerList = createAction('players/SET_PLAYERS', resolve => {
    return (players) => resolve(players);
});

export const setPlayerListError = createAction('players/SET_PLAYERS_ERROR', resolve => {
    return (err) => resolve(err);
});


export const resetState = createAction('players/RESET_STATE', resolve => {
    return () => resolve();
});