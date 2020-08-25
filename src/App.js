// Imports
import React, { useState, useEffect } from 'react';
import 'App.scss';
import 'Styles/fonts.scss';

// Component Imports
import CurrentWeather from 'Components/Organisms/currentWeather';
import FutureWeather from 'Components/Organisms/futureWeather/';

// Helper Functions
import { GetPosition } from 'Helpers/GetPosition.js';
import { FetchWeather } from 'Helpers/FetchWeather.js';

function App() {
  const [pos, setPos] = useState([]);
  const [selectedDate, setSelectedDate] = useState('0');
  const [weather, setWeather] = useState([]);

  // useEffect gets lat/long from user browser
  useEffect(() => {
    GetPosition(setPos);
    }, []);

  // useEffect gets the weather data for the location
  useEffect(() => {
    pos.length && FetchWeather(setWeather, selectedDate, pos);
    }, [pos, selectedDate]);

  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <header>
        <h1>Weather App</h1>
        </header>
      <main>
        <div className="weatherAppWrap">
          <CurrentWeather
            current={weather.daily[selectedDate]}
            />

          <FutureWeather
            daily={weather}
            selected={setSelectedDate}
            />
          </div>
        </main>
      </div>
    :
      <div className="loadingWrap">
        <h2>Loading...</h2>
        </div>
  );
}

export default App;
