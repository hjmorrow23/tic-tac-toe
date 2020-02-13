import { call, put } from 'redux-saga/effects'
import { chunk, get } from 'lodash'
import Api from '~/app/api'
import { setGamesList, setGamesListError } from './actions';

export function* onGetGamesList() {
    try{
        const response = yield call(Api.Games.getGames);
        yield console.log(response)
        yield put(setGamesList(response.data));
    } catch(e) {
        yield put(setGamesListError(e))
    }
    
}
