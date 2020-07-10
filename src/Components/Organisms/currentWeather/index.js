// System required Imports
import React from 'react';
import './index.scss';
// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';
import LabelEle from '../../Atoms/Label/';
import LabelTime from '../../Atoms/LabelTime/';

// Helper Functions

function CurrentWeather(props) {
  const weather = props.current;

  return (
    Object.keys(weather).length > 0 ?
    <div className="currentWeather">
      <div className="currentIcon">
        <WeatherIco current={weather.weather[weather.weather.length-1].description} />
      </div>
      <div className="currentTemp">
        <p className="currTemp">{weather.temp}</p>
        <LabelEle label={'Feels Like'} text={weather.feels_like} />
      </div>
      <div className="currentCenter">
        <LabelEle label={'Humidity'} text={weather.humidity + '%'} />
        <LabelTime label={'Sunrise'} format={'hh:mm A'} text={weather.sunrise} />
        <LabelTime label={'Sunset'} format={'hh:mm A'} text={weather.sunset} />
      </div>
      <div className="currentRight">
        <LabelEle label={'Pressure'} text={weather.pressure} />
        <LabelEle label={'Wind Direction'} text={weather.wind_deg} />
        <LabelEle label={'Wind Speed'} text={weather.wind_speed} />
      </div>
    </div>
    :
    <h2>Loading...</h2>
  );
}

export default CurrentWeather;
