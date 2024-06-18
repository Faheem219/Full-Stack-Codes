import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });


  // To use an async function inside useEffect, we have to wrap it in a synchronous function
  // useEffect(() => {
  //   async function getInitialQuote() {
  //     const response = await fetch(RANDOM_QUOTE_URL);
  //     const jsonResponse = await response.json();
  //     const randomQuote = jsonResponse.quote;
  //     setQuote(randomQuote);
  //   }
  //   getInitialQuote();
  // }, []);

  // This is done so that the website also has a quote displayed on initial load rather than being blank
  useEffect(() => {
    fetchQuote();
  }, []);

  // This is seperated so that we cal also call this function for button clicks as well
  // Also useEffect cannot be assigned an async function
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote Using handler</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
