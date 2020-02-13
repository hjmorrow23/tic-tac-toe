import { createAction } from 'typesafe-actions';

 export const setShowNav = createAction('side_nav/SET_SHOW_NAV', resolve => {
    return (showNav) => resolve(showNav);
}) 