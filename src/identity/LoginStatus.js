import React, {useContext} from 'react';
import {IdentityContext, getLogoutUrl} from './IdentityContext';
import './LoginStatus.css';

const LoginStatus = () => {

    const identity = useContext(IdentityContext);

    return (
        <div className="login-status">
            {!identity.isAuthenticated && LoggedOutStatus(identity)}
            {identity.isAuthenticated && LoggedInStatus(identity)}
        </div>
    )
};

const LoggedOutStatus = (identity) => (
    <button className="login-button" onClick={() => identity.getUserOrRedirectToLogin()}>Login</button>
);

const LoggedInStatus = (identity) => (
    <React.Fragment>
        <span className="login-status-name">{identity.username}</span>
        <a href={getLogoutUrl()} className="logout-link">Logout</a>
    </React.Fragment>
);

export default LoginStatus;