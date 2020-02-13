import AuthenticationActions from './actions';
import { getType } from 'typesafe-actions';

const initialState = {
  token: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    // saves the token into the state
    case getType(AuthenticationActions.login):
      return {
        ...state,
        token: action.payload
      };
    case getType(AuthenticationActions.logout):
      return {
        ...state,
        token: undefined
      };
    // as always, on default do nothing
    default:
      return state;
  }
};
