// System required Imports
import React from 'react';

import StyledLabel from './StyledLabel.js';

function LabelEle(props) {
  return (
    <p className="labelEle">
      <span>
        {props.label}:&nbsp;
        </span>

      {props.text}
      </p>
  )
}

export default LabelEle;
