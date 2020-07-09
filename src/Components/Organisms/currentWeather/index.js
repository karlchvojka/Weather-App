// System required Imports
import React from 'react';
import Moment from 'react-moment';
import WeatherIco from '../../Atoms/WeatherIcon/'

// Helper Functions

function CurrentWeather(props) {
  const weather = props.current;

  return (
    <div className="currentWeather">
      <div className="currentLeft">
        <div className="currentTop">
          <div className="currentIcon">
            <WeatherIco current={weather.weather[weather.weather.length-1].description} />
          </div>
          <div className="currentTemp">
            <p>{weather.temp}</p>
          </div>
        </div>
        <div className="currentBottom">
           <p>Feels Like: {weather.feels_like}</p>
        </div>
      </div>
      <div className="currentRight">
        <p>Humidity: {weather.humidity}%</p>
        <p>Sunrise:
          <Moment
            format="hh:mm A"
            unix
            >
              {weather.sunrise}
          </Moment>
        </p>
        <p>Sunset:
          <Moment
            format="hh:mm A"
            unix
            >
              {weather.sunset}
            </Moment>
        </p>
        <p>Pressure: {weather.pressure} hpa</p>
        <p>Wind Direction: {weather.wind_deg}</p>
        <p>Wind Speed: {weather.wind_speed} KM/H
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
