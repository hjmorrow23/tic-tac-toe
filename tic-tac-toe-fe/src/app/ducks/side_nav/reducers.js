
import { setShowNav } from './actions';
import { getType } from 'typesafe-actions';

 const initialState = {
    showNav: false,
}

 export default (state = initialState, action = {}) => {
    switch(action.type) {
        case getType(setShowNav):
            return {
                ...state,
                showNav: action.payload,
            };
        default:
            return state;
    };
}