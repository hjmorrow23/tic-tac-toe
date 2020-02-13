import { getType } from 'typesafe-actions'
import { onGetGamesList } from "./effects";
import { getGamesList } from "./actions";
import { takeLatest } from "redux-saga/effects";

export function* getGamesSaga() {
    yield takeLatest(getType(getGamesList), onGetGamesList);
}
