import { createSelector } from "reselect";
import { gamesInitialState } from "./reducers";

export const getStoreState = ({ game }) => game;

export const onGetGames = createSelector(
    getStoreState,
    ({ games }) => games
)

export const onGetGame = createSelector(
    getStoreState,
    ({ game }) => game
)