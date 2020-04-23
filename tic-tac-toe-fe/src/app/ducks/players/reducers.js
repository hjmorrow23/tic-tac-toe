import * as Actions from './actions';
import * as Reducers from './reducer-handlers';
import { getType } from "typesafe-actions";

export const playersInitialState = {
    id:'',
    name: '',
    wins: 0,
    losses: 0,
    ties: 0
}

const reducer = (state = playersInitialState, action = {}) => {
    switch(action.type) {
        case getType(Actions.setPlayerList):
            return Reducers.onSetPlayerList(state, action.payload);
        case getType(Actions.setPlayerListError):
            return Reducers.onSetPlayerListError(state, action.payload);
        case getType(Actions.resetState):
            return Reducers.resetState();
        default:
            return state;
    }
}

export default reducer;