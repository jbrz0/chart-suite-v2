import React from 'react';
import Navigation from './Navigation.jsx';

// Svg
import logoUrl from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container headerContainer">
          <Navigation
            className="nav"
            features="features"
            screenshots="screenshots"
          />
          <a className="brand" href="/">
            <img src={logoUrl} width="340" height="75" alt="Chart Suite" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
