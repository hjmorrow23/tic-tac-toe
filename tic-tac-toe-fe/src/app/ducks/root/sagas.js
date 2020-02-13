import { all } from 'redux-saga/effects';
import { getGamesSaga } from '~/app/ducks/games/sagas'

export default function* rootSaga() {
    yield all([
      getGamesSaga(),
    ])
  }