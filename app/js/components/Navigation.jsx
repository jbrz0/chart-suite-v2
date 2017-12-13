import React from 'react';
import ReactTooltip from 'react-tooltip';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="root navRoot" role="navigation">
        <a href="/line" className="link linkOne">
          new chart
        </a>
        <a
          href="#features"
          className="link linkTwo"
        >
          features
        </a>
        <a
          className="link linkThree"
          href="#screenshots"
        >
          screenshots
        </a>
        <a
          href="mailto:chartsuiteapp@gmail.com"
          className="link linkFour"
          data-tip="chartsuiteapp@gmail.com"
        >
          contact
        </a>
        <ReactTooltip effect="solid" place="bottom" />
      </div>
    );
  }
}

