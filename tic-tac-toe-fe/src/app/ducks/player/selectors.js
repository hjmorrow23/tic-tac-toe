import { createSelector } from "reselect";
import { playerInitialState } from "./reducers";

export const getStoreState = ({player}) => player;

export const onGetPlayer = createSelector(
    getStoreState,
    ({ player }) => player
)