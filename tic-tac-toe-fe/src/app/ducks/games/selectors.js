import { createSelector } from "reselect";
import { gamesInitialState } from "./reducers";

const getStoreState = ({ games }) => games;

export const getGames = createSelector(
    getStoreState,
    ({ games }) => games
)