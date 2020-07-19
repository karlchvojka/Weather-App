// System required Imports
import React from 'react';
import Moment from 'react-moment';
import './index.scss';

function LabelDate(props) {
  return (
    <h3 className="indDate">
      <Moment format="MMM D" unix>
        {props.dt}
      </Moment>
    </h3>
  )
}

export default LabelDate;
