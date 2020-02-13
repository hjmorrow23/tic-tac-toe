import { createSelector } from 'reselect';

 const getStoreState = ({ side_nav = {} } = {}) => side_nav;

 export const getShowNav = createSelector(
    getStoreState,
    ({ showNav }) => showNav
);