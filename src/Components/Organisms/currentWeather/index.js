// System required Imports
import React from 'react';
import Moment from 'react-moment';

// Component required Imports
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloud, WiCloudy, WiRain, WiDayRain, WiNightRain, WiDayThunderstorm, WiNightThunderstorm, WiDaySnow, WiNightSnow, WiDayHaze, WiNightFog } from "react-icons/wi";

// Helper Functions
function WeatherIco(props) {
  const date = new Date();
  let night = IsNight();
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

function IsNight() {
  var date = new Date();
  return (date.getHours() > 22 || date.getHours() < 6);
}

function CurrentWeather(props) {
  const weather = props.current;
  console.log('here', weather)
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
