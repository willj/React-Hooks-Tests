import React from 'react';
import PropTypes from 'prop-types';
import './IdentityError.css';

const IdentityError = ({showError, loginUrl, onDismiss}) => {
    if (!showError) return '';

    return (
        <div className="identity-error-wrapper">
            <div className="identity-error">
                <h1 className="error-title">Your session has expired.</h1>
                <p>Please login to continue.</p>
                <a href={loginUrl} className="button primary">Login</a>
                <div className="button-wrapper">
                    <button onClick={onDismiss} className="button secondary">Dismiss</button>
                </div>
            </div>
        </div>
    );
};

export default IdentityError;

IdentityError.propTypes = {
    showError: PropTypes.bool.isRequired,
    loginUrl: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
}