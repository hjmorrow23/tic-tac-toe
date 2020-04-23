import { playersInitialState } from "./reducers";

export const onSetPlayerList = (state, players) => {
    return {
        ...state, 
        players
    };
}

export const onSetPlayerListError = (state, error) => {
    return {
        ...state, 
        error
    };
}

export const resetState = () => {
    return playersInitialState;
}