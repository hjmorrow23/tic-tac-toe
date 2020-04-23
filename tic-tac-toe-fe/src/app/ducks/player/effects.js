import { call, put } from 'redux-saga/effects'
import Api from '~/app/api'
import { setPlayer, setPlayerError } from './actions';

export function* onGetPlayer(request) {
    try {
        const playerId = request.payload;
        const response = yield call(Api.Players.getPlayer, playerId);
        yield put(setPlayer(response.data));
    } catch(e) {
        yield put(setPlayerError(e));
    }
}

export function* onAddPlayer(request) {
    try {
        const response = yield call(Api.Players.addPlayer, request.payload);
    } catch(e) {
        yield put(setPlayerError(e));
    }
}

export function* onUpdatePlayer(request) {
    try {
        console.log(request)
        const playerId = request.payload[0];
        const response = yield call(Api.Players.updatePlayer, [playerId, request.payload[1]]);
        console.log(response);
    } catch(e) {
        console.log(e)
        yield put(setPlayerError(e));
    }
}

