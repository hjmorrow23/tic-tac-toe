import { createAction } from 'typesafe-actions';

const login = createAction('auth/LOGIN', resolve => {
    return (token) => resolve(token);
});

const logout = createAction('auth/LOGOUT', resolve => {
    return () => resolve();
});

const Auth = {
    login,
    logout,
};
export default Auth;
