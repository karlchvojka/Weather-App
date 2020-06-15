// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './App.scss';
import './Styles/fonts.scss';

// Component Imports

// Helper Functions

// fetchWeather fetches data from the API and saves it into state
const fetchWeather = async (setWeather) => {
  const result = await axios(
    "http://api.openweathermap.org/data/2.5/onecall?lat=43.6532&lon=-79.3832&units=metric&exclude=minutely&appid=1b6a6865f38ddcf18f28b82e13ba62d0"
  );

  console.log('result', result)
  // Set current User state
  setWeather(result.data);
};

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather(setWeather);
  }, []);

  console.log('weather', weather)
  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <h1>Weather App</h1>
      <Moment unix>{weather.current.sunset}</Moment>
    </div>
    :
      <h2>Loading...</h2>
    );
}

export default App;
