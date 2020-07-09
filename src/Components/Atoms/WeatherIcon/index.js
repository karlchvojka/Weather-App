import React from 'react';

// Component required Imports
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiCloud, WiCloudy, WiRain, WiDayRain, WiNightRain, WiDayThunderstorm, WiNightThunderstorm, WiDaySnow, WiNightSnow, WiDayHaze, WiNightFog } from "react-icons/wi";

// Helper Functions
import { IsNight } from '../../../Helpers/IsNight.js'

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

export default WeatherIco;
