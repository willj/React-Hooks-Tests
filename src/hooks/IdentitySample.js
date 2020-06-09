import React, {useContext} from 'react';
import {IdentityContext, checkRole, getLoginUrl} from '../identity/IdentityContext';

function IdentitySample() {
    const identity = useContext(IdentityContext);

    console.log(identity);

    return (
        <>
            <p>{identity.username} is role {identity.role}</p>
            <button onClick={() => identity.handleAuthError({response: {status: 401}})}>Auth Error</button>

            <button onClick={() => {
                alert(checkRole(identity, 'admin'));
            }}>check role is admin (true for will, false for alice)</button>

            <p>can you update user?</p>
            <button onClick={identity.getUserOrRedirectToLogin}>Change user</button>

        <p>Login url {getLoginUrl()}</p>
        </>
    );
}

export default IdentitySample;