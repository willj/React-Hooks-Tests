import React, {useState, useEffect} from 'react';

function Quote(){
    const [quote, setQuote] = useState({});

    useEffect(()=>{
        console.log("running query");

        fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then(response => response.json())
        .then(data => setQuote(data));

    }, []); // we only want to run once, so we pass in empty array for comparison

    return (
        <div style={{width: '600px', margin: 'auto auto'}}>
            {quote.id && <p>{quote.en} by <b>{quote.author}</b></p>}
        </div>
    );
}

export default Quote;