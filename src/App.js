import React, { useState } from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

const [isLoading, setIsLoading] = useState(false);

const fetchJoke = async () => {
  setIsLoading(true);

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }

    const data = await response.json();
    setJoke(data.value);
  } catch (error) {
    console.log(error);
    // Handle error state or display an error message to the user
  } finally {
    setIsLoading(false);
  }
};

return (
  <>
  <div className="wrapper">
    <div>
      <h1>CHUCK NORRIS JOKE GENERATOR</h1>
      <p>Are you having a bad day? Maybe Chuck Norris can cheer you up! Welcome to the Chuck Norris Joke generator, where you can click on the button and get a fun new joke. The app was made with the API:
      <a href="chucknorris.io" content="Link for API" aria-label="Link for API"> chucknorris.io</a></p>
    </div>

    <div className="container">
      <button className="button"
      onClick={fetchJoke}
      disabled={isLoading}
      aria-label="Get Joke"
      aria-describedby="joke-description">
      {isLoading ? 'Loading...' : 'Get Joke'}
      </button>
    </div>

    <div className="jokecontainer">
       <h2>Generated joke:</h2>
    </div>
    <div className="jokecontainer">
      <div >{joke && <p>{joke}</p>}</div>
    </div>


    <div className="container">
       <img alt="Chuck Norris gives a thumbs up" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.vox-cdn.com%2Fthumbor%2FglChrWqxSoJ8ACrLWgxwEIW2Rog%3D%2F42x0%3A458x231%2F1080x600%2Fcdn0.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F35659108%2Fgiphy.0.gif&f=1&nofb=1&ipt=7b3eae505d40576981cffb3f698259fbabb2063a42ef6279508abb8833b35f64&ipo=images">
       </img>
    </div>

    </div>
  </>
  );
};

export default ChuckNorrisJoke;
