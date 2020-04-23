import { call, put } from 'redux-saga/effects'
import Api from '~/app/api'
import { setPlayerList, setPlayerListError, resetState } from './actions';

export function* onGetPlayerList() {
    try{
        yield put(resetState());
        const response = yield call(Api.Players.getPlayers);
        yield put(setPlayerList(response.data));
    } catch(e) {
        yield put(setPlayerListError(e))
    }
    
}
