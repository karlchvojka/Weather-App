// Imports
import React, { useState, useEffect } from 'react';
import './App.scss';
import './Styles/fonts.scss';

// Component Imports
import CurrentWeather from './Components/Organisms/currentWeather';
import FutureWeather from './Components/Organisms/futureWeather/';

// Helper Functions
import { GetPosition } from './Helpers/GetPosition.js';
import { FetchWeather } from './Helpers/FetchWeather.js';

// Helper Functions

function App() {
  // Variables
  const [url, setUrl] = useState('');
  const [weather, setWeather] = useState({});
  const [current, setCurrent] = useState({});

  GetPosition(setUrl);

  useEffect(() => {
    url ?
      FetchWeather(setWeather, setCurrent, url)
    :
      console.log('No Url Applied. Please check the URL.');
  }, [url]);

  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <div className="weatherAppWrap">
          <CurrentWeather current={current} />
          <FutureWeather daily={weather.daily} />
        </div>
      </main>
    </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
