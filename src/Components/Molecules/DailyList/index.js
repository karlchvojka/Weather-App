// System required Imports
import React from 'react';
import Moment from 'react-moment';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';

// Helper Functions

function DailyList(props) {
  const week = props.days.slice(1, 8);

  return week.map((item, key) =>
    <li key={key.toString()}>
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

export default DailyList;
