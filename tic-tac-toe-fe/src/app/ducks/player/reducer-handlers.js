import { playerInitialState } from "./reducers";

export const onSetPlayer = (state, player) => {
    return {
        ...state,
        player
    }
}

export const onSetPlayerError = (state, error) => {
    return {
        ...state, 
        error
    };
}

export const resetState = () => {
    return playerInitialState;
}