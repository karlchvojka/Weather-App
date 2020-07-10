// System required Imports
import React from 'react';
import './index.scss';

// Component Imports
import DailyList from '../../Molecules/DailyList';

// Helper Functions

function FutureWeather(props) {

  return (
    <div className="futureWeather">
      <ul>
        <DailyList days={props.daily} />
      </ul>
    </div>
  )
}

export default FutureWeather;
