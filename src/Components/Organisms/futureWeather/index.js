// System required Imports
import React from 'react';
import './index.scss';

// Component Imports
import DailyList from '../../Molecules/DailyList';

// Helper Functions

function FutureWeather(props) {

  return (
    Object.keys(props.daily).length > 0 ?
    <div className="futureWeather">
      <ul>
        <DailyList
          days={props.daily}
          selectedDate={props.selected}
          />
      </ul>
    </div>
    :
    <h2>loading</h2>
  )
}

export default FutureWeather;
