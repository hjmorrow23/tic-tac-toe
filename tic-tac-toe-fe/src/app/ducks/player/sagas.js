import { getType } from 'typesafe-actions'
import { onGetPlayer, onAddPlayer, onUpdatePlayer } from "./effects";
import { getPlayer, addPlayer, updatePlayer } from "./actions";
import { takeLatest } from "redux-saga/effects";

export function* getPlayerSaga() {
    yield takeLatest(getType(getPlayer), onGetPlayer);
}

export function* addPlayerSaga() {
    yield takeLatest(getType(addPlayer), onAddPlayer);
}

export function* updatePlayersSaga() {
    yield takeLatest(getType(updatePlayer), onUpdatePlayer);
}
