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
    setUrl(`http://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`);
  });
}

const fetchWeather = async (setWeather, url) => {
  const result = await axios(url);

  // Set current User state
  setWeather(result.data);
};
// fetchWeather fetches data from the API and saves it into state

function App() {
  // Variables
  const [url, setUrl] = useState('');
  const [weather, setWeather] = useState({});

  getPosition(setUrl);

  useEffect(() => {
    url ?
      fetchWeather(setWeather, url)
    :
      console.log('no url')
  }, [url]);

  console.log('we', weather);
  return (
    Object.keys(weather).length > 0 ?
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <div className="weatherAppWrap">
          <div className="currentWeather">
            <div className="currentImg">
              <img
                src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
                />
                </div>
            <div className="currentLeft">
              <div className="currentTitle">
                <h2>
                  <Moment
                    format="MMM Do YYYY"
                    unix
                    >
                      {weather.current.dt}
                  </Moment>
                </h2>
              </div>
              <div className="internal">
                <div className="internal_left">
                  <p>Current: {weather.current.temp}</p>
                  <p>Feels Like: {weather.current.feels_like}</p>
                  <p>Conditions: {weather.current.weather[0].description}</p>
                  </div>
                <div className="internal_right">
                  <p>
                    Humidity: {weather.current.humidity}%
                    </p>
                  <p>
                    Sunrise:
                    <Moment
                      format="hh:mm A"
                      unix
                      >
                        {weather.current.sunrise}
                      </Moment>
                    </p>
                  <p>
                    Sunset:
                      <Moment
                        format="hh:mm A"
                        unix
                        >
                          {weather.current.sunset}
                        </Moment>
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dailyWrap">
            <div>
            </div>
          </div>
        </div>
      </main>
    </div>
    :
      <h2>Loading...</h2>
  );
}

export default App;
