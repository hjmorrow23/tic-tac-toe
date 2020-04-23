import { gamesInitialState } from "./reducers";

export const onSetGamesList = (state, games) => {
    return {
        ...state, 
        games
    };
}

export const onSetGamesListError = (state, error) => {
    return {
        ...state, 
        error
    };
}

export const onSetGame = (state, game) => {
    return {
        ...state, 
        game
    };
}

export const onSetGameError = (state, error) => {
    return {
        ...state, 
        error
    };
}

export const resetState = () => {
    return gamesInitialState;
}