import { call, put } from 'redux-saga/effects'
import { chunk, get } from 'lodash'
import Api from '~/app/api'
import { setGamesList, setGamesListError, setGame, setGameError, resetState } from './actions';

export function* onGetGamesList() {
    try{
        yield put(resetState());
        const response = yield call(Api.Games.getGames);
        yield put(setGamesList(response.data));
    } catch(e) {
        yield put(setGamesListError(e))
    }
    
}

export function* onGetGame(request) {
    try {
        const gameId = request.payload;
        const response = yield call(Api.Games.getGame, gameId);
        yield put(setGame(response.data));
    } catch(e) {
        yield put(setGameError(e));
    }
}

export function* onAddGame(request) {
    try {
        const response = yield call(Api.Games.addGame, request.payload);
    } catch(e) {
        yield put(setGameError(e));
    }
}
