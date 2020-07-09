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
  } else if (icon.includes("thunderstorm") && night === false) {
    return <WiDayThunderstorm />
  } else if (icon.includes("thunderstorm") && night === true) {
    return <WiNightThunderstorm />
  } else if (icon === "shower rain" ) {
    return <WiRain />
  } else if (icon.includes("rain") && night === false) {
    return <WiDayRain />
  } else if (icon.includes("rain") && night === true) {
    return <WiNightRain />
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

  getPosition(setUrl);

  useEffect(() => {
    url ?
      fetchWeather(setWeather, url)
    :
      console.log('no url')
  }, [url]);

  const daily = weather.daily;
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
            <div className="currentLeft">
              <div className="currentTop">
                <div className="currentIcon">
                  <WeatherIco current={weather.current.weather[weather.current.weather.length-1].description} />
                </div>
                <div className="currentTemp">
                  <p>{weather.current.temp}</p>
                </div>
              </div>
              <div className="currentBottom">
                 <p>Feels Like: {weather.current.feels_like}</p>
              </div>
            </div>
            <div className="currentRight">
              <p>Humidity: {weather.current.humidity}%</p>
              <p>Sunrise:
                <Moment
                  format="hh:mm A"
                  unix
                  >
                    {weather.current.sunrise}
                </Moment>
              </p>
              <p>Sunset:
                <Moment
                  format="hh:mm A"
                  unix
                  >
                    {weather.current.sunset}
                  </Moment>
              </p>
              <p>Pressure: {weather.current.pressure} hpa</p>
              <p>Wind Direction: {weather.current.wind_deg}</p>
              <p>Wind Speed: {weather.current.wind_speed} KM/H
              </p>
            </div>
          </div>
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
