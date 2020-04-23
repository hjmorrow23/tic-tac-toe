import { createAction } from 'typesafe-actions'

export const getPlayer = createAction('player/GET_PLAYER', resolve => {
    return (id) => resolve(id);
});

export const setPlayer = createAction('player/SET_PLAYER', resolve => {
    return (player) => resolve(player);
});

export const setPlayerError = createAction('player/SET_PLAYER_ERROR', resolve => {
    return (err) => resolve(err);
});

export const addPlayer = createAction('player/ADD_PLAYER', resolve => {
    return (player) => resolve(player);
});

export const updatePlayer = createAction('player/UPDATE_PLAYER', resolve => {
    return (payload) => resolve(payload);
});

export const resetState = createAction('player/RESET_STATE', resolve => {
    return () => resolve();
});