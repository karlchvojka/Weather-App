// System required Imports
import React from 'react';
import Moment from 'react-moment';
import './index.scss';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';

function DailyList(props) {
  const week = props.days.daily;

  const dateSelect = event => {
    props.selectedDate(event.currentTarget.id)
  }

  return week.map((item, key) =>
    <li id={key.toString()} key={key.toString()} onClick={dateSelect} >
      <h3>
        <Moment
          format="MMM D"
          unix
          >
            {item.dt}
        </Moment>
      </h3>
      <WeatherIco current={item.weather[0].description} place={'daily'} />
      <p>{item.temp.day}</p>
    </li>
  )
}

export default DailyList;
