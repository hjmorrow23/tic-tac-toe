import * as Actions from './actions';
import * as Reducers from './reducer-handlers';
import { getType } from "typesafe-actions";

export const playerInitialState = {
    id:'',
    name: '',
    wins: 0,
    losses: 0,
    ties: 0,
    player: {}
}

const reducer = (state = playerInitialState, action = {}) => {
    switch(action.type) {
        case getType(Actions.setPlayer):
            return Reducers.onSetPlayer(state, action.payload);
        case getType(Actions.setPlayerError):
            return Reducers.onSetPlayerError(state, action.payload);
        case getType(Actions.resetState):
            return Reducers.resetState();
        default:
            return state;
    }
}

export default reducer;