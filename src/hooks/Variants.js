import React, {useState} from 'react';

const Variants = () => {
    const [colour, setColour] = useState('');
    const [size, setSize] = useState('');

    return (
        <div>
            {colour.length > 0 && <p>You chose {colour}.</p>}
            <label htmlFor="varColour">Colour</label><br />
            <select id="varColour" value={colour} onChange={(e) => setColour(e.target.value) }>
                <option></option>
                <option>Blue</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>Green</option>
            </select>
            <br />
            {size.length > 0 && <p>You chose {size}.</p>}
            <label htmlFor="varSize">Size</label><br />
            <select id="varSize" value={size} onChange={(e) => setSize(e.target.value) }>
                <option></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </div>
    );

};

export default Variants;