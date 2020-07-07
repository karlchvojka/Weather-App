// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './App.scss';
import './Styles/fonts.scss';

import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloud, WiCloudy, WiRain, WiDayRain, WiNightRain, WiDayThunderstorm, WiNightThunderstorm, WiDaySnow, WiNightSnow, WiDayHaze, WiNightFog } from "react-icons/wi";

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

function isNight() {
  var date = new Date();
  return (date.getHours() > 22 || date.getHours() < 6);
}

function WeatherIco(props) {
  const date = new Date();
  let night = isNight();
  const icon = props.current;

  if (icon === "clear sky" && night === false) {
    return <WiDaySunny />
  } else if (icon === "clear sky" && night === true) {
    return <WiNightClear />
  } else if (icon === "few clouds" && night === false) {
    return <WiDayCloudy />
  } else if (icon === "few clouds" && night === true) {
    return <WiNightCloudy />
  } else if (icon === "scattered clouds") {
    return <WiCloud />
  } else if (icon === "broken clouds" ) {
    return <WiCloudy />
  } else if (icon === "shower rain" ) {
    return <WiRain />
  } else if (icon === "rain" && night === false) {
    return <WiDayRain />
  } else if (icon === "rain" && night === true) {
    return <WiNightRain />
  } else if (icon === "thunderstorm" && night === false) {
    return <WiDayThunderstorm />
  } else if (icon === "thunderstorm" && night === true) {
    return <WiNightThunderstorm />
  } else if (icon === "snow" && night === false) {
    return <WiDaySnow />
  } else if (icon === "snow" && night === true) {
    return <WiNightSnow />
  } else if (icon === "mist" && night === false) {
    return <WiDayHaze />
  } else if (icon === "mist" && night === true) {
    return <WiNightFog />
  }
}

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
              <WeatherIco current={weather.current.weather[0].description} />
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
                  <p>Conditions: {weather.current.weather[0].description}</p>
                  <p>Current Temp: {weather.current.temp}</p>
                  <p>Feels Like: {weather.current.feels_like}</p>
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
