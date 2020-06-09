import React from 'react';

export const defaultIdentity = {
    isAuthenticated: false,
    username: '',
    role: '',
    handleAuthError: () => {},
    getUserOrRedirectToLogin: () => {}
};

export const IdentityContext = React.createContext(defaultIdentity);

// replaces hasRole because it doesn't work with hooks/functions
// identity is captured when the function is first rendered
// so it doesn't have updated state, therefore identity.role is always empty
// https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function
export function checkRole(identity, roles){
    if (Array.isArray(roles)) {
        return roles.includes(identity.role);
    }
    return identity.role === roles;
}

export function getLoginUrl(){
    return window.lhiapp ? window.lhiapp.loginUrl : process.env.REACT_APP_LOGIN_URL;
}

export function getLogoutUrl(){
    return window.lhiapp ? window.lhiapp.logoutUrl : process.env.REACT_APP_LOGOUT_URL;
}