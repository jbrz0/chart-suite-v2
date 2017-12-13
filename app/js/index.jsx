import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import HeadInfo from './components/HeadInfo.jsx';
import Header from './components/Header.jsx';
import IconBar from './components/IconBar.jsx';
import Video from './components/Video.jsx';
import Features from './components/Features.jsx';
import Screenshots from './components/Screenshots.jsx';
import Footer from './components/Footer.jsx';
import ActionBtn from './components/ActionBtn.jsx';

import BarChartTemplate from './components/BarChartTemplate.jsx';
import LineChartTemplate from './components/LineChartTemplate.jsx';
import PieChartTemplate from './components/PieChartTemplate.jsx';

// Analytics Info
ReactGA.initialize('UA-000000-01');

// Sitewide components (every page)

// Page header info
render(<HeadInfo
  pageTitle="Chart Suite | Build Charts"
  pageDescription="Build and export charts interactively"
  pageImage="./../../screenshot.png"
  pageWebsite="http://chartsuite.us"
/>, document.getElementById('head-info'));

// Page specific
if (document.body.contains(document.getElementById('header'))) {
  render(<Header />, document.getElementById('header'));
}
if (document.body.contains(document.getElementById('icon-bar'))) {
  render(<IconBar />, document.getElementById('icon-bar'));
}
if (document.body.contains(document.getElementById('video'))) {
  render(<Video />, document.getElementById('video'));
}
if (document.body.contains(document.getElementById('features'))) {
  render(<Features id="features" />, document.getElementById('features'));
}
if (document.body.contains(document.getElementById('screenshots'))) {
  render(<Screenshots />, document.getElementById('screenshots'));
}
if (document.body.contains(document.getElementById('footer'))) {
  render(<Footer />, document.getElementById('footer'));
}
if (document.body.contains(document.getElementById('action-btn'))) {
  render(<ActionBtn />, document.getElementById('action-btn'));
}

// Charts
if (document.body.contains(document.getElementById('bar-chart'))) {
  render(<BarChartTemplate />, document.getElementById('bar-chart'));
}
if (document.body.contains(document.getElementById('line-chart'))) {
  render(<LineChartTemplate />, document.getElementById('line-chart'));
}
if (document.body.contains(document.getElementById('pie-chart'))) {
  render(<PieChartTemplate />, document.getElementById('pie-chart'));
}
