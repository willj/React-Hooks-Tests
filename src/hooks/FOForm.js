import React from 'react';

function FOForm({name, type, onChange}){

    return (
        <div>
            <label htmlFor="foName">Enter a name</label>
            <input type="text" name="name" id="foName" value={name} onChange={onChange} />

            <label htmlFor="foType">Choose an insult</label>
            <select name="type" id="foType" value={type} onChange={onChange}>
                <option></option>
                <option>awesome</option>
                <option>bye</option>
                <option>cup</option>
                <option>everything</option>
            </select>
        </div>
    );

}

export default FOForm;