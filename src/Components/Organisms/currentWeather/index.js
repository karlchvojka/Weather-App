// System required Imports
import React from 'react';
import './index.scss';
// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';
import LabelEle from '../../Atoms/Label/';
import LabelTime from '../../Atoms/LabelTime/';

// Helper Functions
function CurrentWeather(props) {
  const current = props.current;
  return (
    Object.keys(current).length > 0 ?
    <div className="currentWeather">
      <div className="currentIcon">
        <WeatherIco
          current={current.weather[current.weather.length-1].description}
          place={'current'}
          />
      </div>
      <div className="currentTemp">
        <p className="currTemp">
          {current.temp.day} &#176;C
          </p>
        <LabelEle
          label={'Feels Like'}
          text={current.feels_like.day}
          />
      </div>
      <div className="currentCenter">
        <LabelEle
          label={'Humidity'}
          text={current.humidity + '%'}
          />
        <LabelTime
          label={'Sunrise'}
          format={'hh:mm A'}
          text={current.sunrise}
          />
        <LabelTime
          label={'Sunset'}
          format={'hh:mm A'}
          text={current.sunset}
          />
      </div>
      <div className="currentRight">
        <LabelEle
          label={'Pressure'}
          text={current.pressure}
          />
        <LabelEle
          label={'Wind Direction'}
          text={current.wind_deg}
          />
        <LabelEle
          label={'Wind Speed'}
          text={current.wind_speed}
          />
      </div>
    </div>
    :
    <h2>Loading...</h2>
  );
}

export default CurrentWeather;
