import { all } from 'redux-saga/effects';
import { getGamesSaga, getGameSaga, addGameSaga } from '~/app/ducks/games/sagas'
import { getPlayersSaga } from '~/app/ducks/players/sagas'
import { getPlayerSaga, addPlayerSaga, updatePlayersSaga } from '~/app/ducks/player/sagas'
import { addGame } from '../games/actions';

export default function* rootSaga() {
    yield all([
      getGamesSaga(),
      getGameSaga(),
      addGameSaga(),
      getPlayersSaga(),
      getPlayerSaga(),
      addPlayerSaga(),
      updatePlayersSaga()
    ])
  }