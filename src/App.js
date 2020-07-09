// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './App.scss';
import './Styles/fonts.scss';

// Component Imports
import CurrentWeather from './Components/Organisms/currentWeather';
import WeatherIco from './Components/Atoms/WeatherIcon/'

// Helper Functions
import { GetPosition } from './Helpers/GetPosition.js';
import { FetchWeather } from './Helpers/FetchWeather.js';

// Helper Functions

function dailyList(days) {
  const week = days.slice(1, 8);

  return week.map((item, key) =>
    <li>
      <p>
        <Moment
          format="MMM D"
          unix
          >
            {item.dt}
        </Moment>
      </p>
      <p>
        <WeatherIco current={item.weather[0].description} />
      </p>
      <p>{item.temp.day}</p>
    </li>
  )
}

function App() {
  // Variables
  const [url, setUrl] = useState('');
  const [weather, setWeather] = useState({});

  GetPosition(setUrl);

  useEffect(() => {
    url ?
      FetchWeather(setWeather, url)
    :
      console.log('no url')
  }, [url]);

  const daily = weather.daily;

  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <div className="weatherAppWrap">
          <CurrentWeather current={weather.current} />
          <div className="futureWeather">
            <ul>
              {dailyList(weather.daily)}
            </ul>
          </div>
        </div>
      </main>
    </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
