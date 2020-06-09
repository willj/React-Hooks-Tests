import React, {useEffect, useState} from 'react';

function FOMessage({name, type}){
    const [insult, setInsult] = useState({});

    useEffect(() => {
        if (name && type){
            fetch(`https://www.foaas.com/${type}/${name}`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then(data => setInsult(data));
        }
    }, [type]); // you can make it only change if a certain prop or state item changes

    return (
        <div>
            {insult.message && <h3>{insult.message}</h3>}
            {insult.subtitle && <p>{insult.subtitle}</p>}
        </div>
    );
}

export default FOMessage;