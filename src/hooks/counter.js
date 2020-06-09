import React, {useState, useEffect} from 'react';

const Counter = ({startNum = 0}) => {
    const [count, setCount] = useState(startNum);

    useEffect(() => {
        document.title = `The count is on ${count}... oooh!`;
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(count - 1)}>Remove 1</button>
        </div>
    );

};

export default Counter;