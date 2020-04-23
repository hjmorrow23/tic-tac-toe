import { createSelector } from "reselect";
import { playerInitialState } from "./reducers";

export const getStoreState = ({players}) => players;

export const onGetPlayers = createSelector(
    getStoreState,
    ({ players }) => players
)
