// System required Imports
import React from 'react';
import Moment from 'react-moment';


function LabelTime(props) {
  return (
    <p>{props.label}: <Moment format={props.format} unix>{props.text}</Moment></p>
  )
}

export default LabelTime;
