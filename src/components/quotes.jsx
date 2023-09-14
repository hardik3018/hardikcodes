import React, {useState, useEffect} from 'react';


export const Quoted = () => {

   //for animation  on scroll


  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then(
        
        // console.log
        (q) => {
          setQuote(q.quote);  
          setAuthor(q.author);
          console.log(q);
        }
      )
  },[]);

  let fetchNewQuote = () => {
     fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then( 
        // console.log
        (q) => {
          setQuote(q.quote);  
          setAuthor(q.author);
          console.log(q);
        }
      )
  }
  return (
    <section className="q" data-aos='zoom-in-up' data-aos-duration="500">
    <div className="quotation">
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
            <button className="btn" onClick={fetchNewQuote}>Refresh</button>
         </div>
    </div>
    </section>
  );
}

