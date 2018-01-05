import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class HeadInfo extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <title>{this.props.pageTitle}</title>
        <meta name="description" content={this.props.pageDescription} />

        {/* Open Graph tags */}
        <meta property="og:title" content={this.props.pageTitle} />
        <meta property="og:description" content={this.props.pageDescription} />
        <meta property="og:image" content={this.props.pageImage} />
        <meta property="og:url" content={this.props.pageWebsite} />

        {/* Twitter Open Graph tags */}
        <meta property="twitter:title" content={this.props.pageTitle} />
        <meta property="twitter:description" content={this.props.pageDescription} />
        <meta property="twitter:image" content={this.props.pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site" content={this.props.pageWebsite} />
      </Helmet>
    );
  }
}

HeadInfo.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageWebsite: PropTypes.string,
};

HeadInfo.defaultProps = {
  pageTitle: 'React Template Demo',
  pageDescription: 'Default meta description found in HeadInfo.js',
  pageImage: 'Default Image_URL found in HeadInfo.js',
  pageWebsite: 'http://oddscenes.com',
};

export default HeadInfo;
