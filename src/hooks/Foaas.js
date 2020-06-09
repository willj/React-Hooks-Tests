import React, {useState} from 'react';
import FOForm from './FOForm';
import FOMessage from './FOMessage';

function Foaas(){
    const [fromName, setFromName] = useState('');
    const [type, setType] = useState('');

    // i'm not sure there's a good way to do a single updateState func
    // if you're using multiple useState's as recommended over an object
    function updateState(event){
        let {name, value} = event.target;
        
        if (name === 'name'){
            setFromName(value);
        } else if (name === 'type') {
            setType(value);
        }
    }

    return (
        <div>
            <h2>FO As A Service</h2>
            <FOForm name={fromName} type={type} onChange={updateState} />

            <FOMessage name={fromName} type={type} />
        </div>
    );

}

export default Foaas;