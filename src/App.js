// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './App.scss';
import './Styles/fonts.scss';

// Component Imports

// Helper Functions
const getPosition = (setUrl) => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const pos = [
      position.coords.latitude,
      position.coords.longitude
    ]
    setUrl(`http://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&units=metric&exclude=minutely&appid=1b6a6865f38ddcf18f28b82e13ba62d0`);
  });
}

const fetchWeather = async (setWeather, url) => {
  const result = await axios(url);

  // Set current User state
  setWeather(result.data);
};
// fetchWeather fetches data from the API and saves it into state

function App() {
  const [url, setUrl] = useState('');
  const [weather, setWeather] = useState({});

  getPosition(setUrl);

  useEffect(() => {
    url.length > 0 ?
      fetchWeather(setWeather, url)
    :
      console.log('no url')
  }, [url]);

  console.log(weather)
  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <h1>Weather App</h1>
      <p>{weather.lat}</p>
    </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
