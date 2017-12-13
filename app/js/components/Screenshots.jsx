import React from 'react';

// Svg
import ScreenOne from './../../img/screenshot1.png';
import ScreenTwo from './../../img/screenshot2.png';

class Screenshots extends React.Component {
  render() {
    return (
      <div className="screenshotRoot">
        <a href="#" name="screenshots"> </a>
        <div className="screenshotWrap">
          <div className="screen screenOne">
            <img src={ScreenOne} alt="Chart Suite Screenshot" className="screenImage" />
          </div>
          <div className="screen screenTwo">
            <img src={ScreenTwo} alt="Chart Suite Screenshot" className="screenImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default Screenshots;
