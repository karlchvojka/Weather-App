// System required Imports
import React from 'react';
import Moment from 'react-moment';

// Component Imports
import WeatherIco from '../../Atoms/WeatherIcon/';

// Helper Functions
function dailyList(days) {
  const week = days.slice(1, 8);

  return week.map((item, key) =>
    <li>
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

function FutureWeather(props) {

  return (
    <div className="futureWeather">
      <ul>
        {dailyList(props.daily)}
      </ul>
    </div>
  )
}

export default FutureWeather;
