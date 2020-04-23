import { getType } from 'typesafe-actions'
import { onGetPlayerList } from "./effects";
import { getPlayerList } from "./actions";
import { takeLatest } from "redux-saga/effects";

export function* getPlayersSaga() {
    yield takeLatest(getType(getPlayerList), onGetPlayerList);
}