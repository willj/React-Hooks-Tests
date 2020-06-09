import React, {useState, useEffect} from 'react';
import { IdentityContext, defaultIdentity, getLoginUrl } from './IdentityContext';
import IdentityError from './IdentityError';

const Identity = ({children}) => {
    const initialIdentity = {
        ...defaultIdentity,
        handleAuthError,
        getUserOrRedirectToLogin
    };

    const [identityError, setIdentityError] = useState(false);
    const [identity, setIdentity] = useState(initialIdentity);
    
    useEffect(() => {
        fetch(process.env.REACT_APP_LOGIN_URL)
        .then(response => response.json())
        .then(data => {
            setUser({
                name: 'Will',
                role: 'admin'
            });

            redirectAfterLogin();
        });
    }, []);

    function getUserOrRedirectToLogin(redirectTo = '/search'){
        setUser({
            name: 'Alice',
            role: 'editor'
        });
        // won't use this in this sample
        // api.get('/Account/WhoAmI').then(res => {
        //     this.setUser(res.data);
        // })
        // .catch(() => {
        //     // set cookie with redirect url, we'll go back here after login
        //     document.cookie = `HOOKTEST_LOGIN_REDIRECT=${redirectTo}; path=/; max-age=1200`;

        //     window.location.href = this.getLoginUrl();
        // });
    }

    function redirectAfterLogin(){
        alert("redirect after login");
    }

    function removeIdentityError(){
        setIdentityError(false);
    }

    function handleAuthError(error){
        if(error.response){
            if (error.response.status === 401){
                setIdentityError(true);
            }
        }
    }

    function setUser(user){
        setIdentity(prevState => ({
            ...prevState,
            isAuthenticated: true,
            username: user.name,
            role: user.role
        }));
    }

    return (
        <>
            <IdentityError showError={identityError} loginUrl={getLoginUrl()} onDismiss={removeIdentityError} />
            <IdentityContext.Provider value={identity}>
                {children}
            </IdentityContext.Provider>
        </>
    );
};

export default Identity;