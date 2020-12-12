const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  entry: [
    '@babel/polyfill',
    path.join(__dirname, 'src', 'index.jsx'),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new CssMinimizerPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
    runtimeChunk: true,
    mangleWasmImports: true,
    removeAvailableModules: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      favicon: path.join(__dirname, 'src', 'images', 'thumb-icon.png')
    }),
  ],
  devtool: 'none',
});
