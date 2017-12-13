import React from 'react';
import Moment from 'react-moment';
const moment = require('moment');

class PluginMoment extends React.Component {
  render() {
    const now = moment();
    return (
      <div>
        <Moment>{now}</Moment>
      </div>
    );
  }
}

export default PluginMoment;
