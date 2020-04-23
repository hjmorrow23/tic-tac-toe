import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import App from './components/App';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import gameReducer from "~/app/ducks/games/reducers";
import playersReducer from "~/app/ducks/players/reducers";
import playerReducer from "~/app/ducks/player/reducers";
import { apiBase } from './api/ApiBase';
import authReducer from '~/app/ducks/auth/reducers';
import sideNavReducer from '~/app/ducks/side_nav/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/root/sagas';
import rootReducer from './ducks/root/reducer'

const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    game: gameReducer,
    players: playersReducer,
    player: playerReducer,
    auth: authReducer,
    side_nav: sideNavReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

sagaMiddleware.run(rootSaga);

apiBase.initApi(store);

const Root = hot(module)(() => <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>);
ReactDOM.render(<Root />, document.getElementById('root'));