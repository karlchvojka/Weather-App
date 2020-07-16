// System required Imports
import React from 'react';
import Moment from 'react-moment';
import './index.scss';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';

function DailyList(props) {
  const week = props.days.daily.slice(0, 7);

  const dateSelect = event => {
    props.selectedDate(event.currentTarget.id)
  }

  return week.map((item, key) =>
    <li id={key.toString()} key={key.toString()} onClick={dateSelect} >
      <h3 className="indDate">
        <Moment
          format="MMM D"
          unix
          >
            {item.dt}
        </Moment>
      </h3>
      <WeatherIco className="indWeatherIco" current={item.weather[0].description} place={'daily'} />
      <p className="indTemp">{item.temp.day}&#176;C</p>
    </li>
  )
}

export default DailyList;
