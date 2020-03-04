import { createSelector } from "reselect";
import { gamesInitialState } from "./reducers";

export const getStoreState = ({ game }) => game;

export const getGames = createSelector(
    getStoreState,
    ({ games }) => games
)