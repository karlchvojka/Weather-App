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
// fetchWeather fetches data from the API and saves it into state


function App() {
  const [url, setUrl] = useState('');
  const [weather, setWeather] = useState({});

  getPosition(setUrl);

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(url);

      // Set current User state
      setWeather(result.data);
    };

    fetchWeather(url);
  }, [url]);

  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <h1>Weather App</h1>

    </div>
    :
      <h2>Loading...</h2>
    );
}

export default App;
