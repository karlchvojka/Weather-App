// System required Imports
import React from 'react';
import Moment from 'react-moment';
import './index.scss';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';

// Helper Functions

function DailyList(props) {
  const week = props.days.slice(1, 8);

  return week.map((item, key) =>
    <li key={key.toString()}>
      <h3>
        <Moment
          format="MMM D"
          unix
          >
            {item.dt}
        </Moment>
      </h3>
      <WeatherIco current={item.weather[0].description} />
      <p>{item.temp.day}</p>
    </li>
  )
}

export default DailyList;
