/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

// Set to production
process.env.NODE_ENV = 'production';

// HTML Pages
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  title: 'HomePage',
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: true,
  allChunks: true,
});
const HTMLWebpackPluginConfigBar = new HTMLWebpackPlugin({
  title: 'ChartBar',
  template: path.join(__dirname, '/app/bar.html'),
  filename: 'bar.html',
  inject: true,
  allChunks: true,
});
const HTMLWebpackPluginConfigLine = new HTMLWebpackPlugin({
  title: 'ChartLine',
  template: path.join(__dirname, '/app/line.html'),
  filename: 'line.html',
  inject: true,
  allChunks: true,
});
const HTMLWebpackPluginConfigNotFound = new HTMLWebpackPlugin({
  title: 'NotFoundPage',
  template: path.join(__dirname, '/app/404.html'),
  filename: '404.html',
  inject: true,
  allChunks: true,
});

const SassBundle = new ExtractTextPlugin({
  filename: '[name].bundle.css',
  allChunks: true,
});

module.exports = {
  entry: [
    path.join(__dirname, '/app/js/index.jsx'),
    path.join(__dirname, '/app/sass/index.sass'),
  ],
  module: {
    loaders: [
      {
        test: /\.(html)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
      {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg',
      },
      {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
    ],
  },
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/build'),
  },
  // target: 'web',
  devtool: 'inline-source-map',
  plugins: [
    HTMLWebpackPluginConfig,
    HTMLWebpackPluginConfigBar,
    HTMLWebpackPluginConfigLine,
    HTMLWebpackPluginConfigNotFound,
    new PreloadWebpackPlugin(),
    SassBundle,
    new DashboardPlugin(),
    new FaviconsWebpackPlugin(path.join(__dirname, '/app/img/favicon.png')),

    // Build for production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
