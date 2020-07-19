// System required Imports
import React from 'react';
import './index.scss';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';
import LabelDate from '../../Atoms/LabelDate/';

function DailyList(props) {
  const week = props.days.daily.slice(0, 7);

  const dateSelect = event => {
    props.selectedDate(event.currentTarget.id)
  }
  
  return week.map((item, key) =>
    <li id={key.toString()}
        key={key.toString()}
        onClick={dateSelect}>
      <LabelDate
        dt={item.dt}
        />
      <WeatherIco
        className="indWeatherIco"
        current={item.weather[0].description}
        place={'daily'}
        />
      <p className="indTemp">
        {item.temp.day}&#176;C
        </p>
    </li>
  )
}

export default DailyList;
