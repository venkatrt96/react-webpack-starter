const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    path.join(__dirname, 'src', 'index.jsx'),
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      favicon: path.join(__dirname, 'src', 'images', 'thumb-icon.png')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
});
