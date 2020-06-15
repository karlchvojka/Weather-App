// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import './Styles/fonts.scss';

// Component Imports

// Helper Functions
const fetchWeather = async (setWeather) => {
  const result = await axios(
    "http://api.openweathermap.org/data/2.5/onecall?lat=43.6532&lon=79.3832&appid=1b6a6865f38ddcf18f28b82e13ba62d0"
  );
  // set resource for reference purposes.
  let resource = result;
  console.log(resource)
  // Set current User state
  setWeather(resource);
};

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather(setWeather);
  }, []);

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
