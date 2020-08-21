// System required Imports
import React from 'react';
import Moment from 'react-moment';
import './styles.scss';

function LabelTime(props) {
  return (
    <p className="timeLabel">
      <span>
        {props.label}:&nbsp;
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
