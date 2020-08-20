// System required Imports
import React from 'react';
import './index.scss';

function LabelEle(props) {
  return (
    <p className="weatherLabel">
      <span>
        {props.label}:
        </span>
        
      {props.text}
      </p>
  )
}

export default LabelEle;
