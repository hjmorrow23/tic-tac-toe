import { call, put } from 'redux-saga/effects'
import { chunk, get } from 'lodash'
import Api from '~/app/api'
import { setGamesList, setGamesListError, resetState } from './actions';

export function* onGetGamesList() {
    try{
        yield put(resetState());
        const response = yield call(Api.Games.getGames);
        yield put(setGamesList(response.data));
    } catch(e) {
        yield put(setGamesListError(e))
    }
    
}
