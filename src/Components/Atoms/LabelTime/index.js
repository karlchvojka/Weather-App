// System required Imports
import React from 'react';
import Moment from 'react-moment';

function LabelTime(props) {
  return (
    <p className="weatherLabel">
      <span>
        {props.label}:
        </span>

      <Moment
        format={props.format}
        unix
        >
        {props.text}
        </Moment>
      </p>
  )
}

export default LabelTime;
