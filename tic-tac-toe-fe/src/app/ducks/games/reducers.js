import * as Actions from './actions';
import * as Reducers from './reducer-handlers';
import { getType } from "typesafe-actions";

export const gamesInitialState = {
    winner: '',
    number_of_moves: 0,
    date_started: '',
    creator: ''
}

const reducer = (state = gamesInitialState, action) => {
    switch(action.type) {
        case getType(Actions.setGamesList):
            return Reducers.onSetGamesList(state, action.payload);
        case getType(Actions.setGamesListError):
            return Reducers.onSetGamesListError(state, action.payload);
        default:
            return state;
    }
}

export default reducer;