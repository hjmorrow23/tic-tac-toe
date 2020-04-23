import { getType } from 'typesafe-actions'
import { onGetGamesList, onGetGame, onAddGame } from "./effects";
import { getGamesList, getGame, addGame } from "./actions";
import { takeLatest } from "redux-saga/effects";

export function* getGamesSaga() {
    yield takeLatest(getType(getGamesList), onGetGamesList);
}

export function* getGameSaga() {
    yield takeLatest(getType(getGame), onGetGame)
}

export function* addGameSaga() {
    yield takeLatest(getType(addGame), onAddGame)
}
