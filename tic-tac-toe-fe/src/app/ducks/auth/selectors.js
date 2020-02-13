import { createSelector } from 'reselect';

const getStoreState = ({ auth = {} } = {}) => auth;

export const getToken = createSelector(
    getStoreState,
    ({ token }) => token
);

export const getIsAuthorized = createSelector(
    getToken,
    // (token) => !!token,
    () => true,
);