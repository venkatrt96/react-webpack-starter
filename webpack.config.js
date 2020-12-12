const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientPath = path.join(__dirname, 'src');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      constants: `${clientPath}/constants/`,
      images: `${clientPath}/images/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          'css-loader', 'postcss-loader',
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          quality: 85,
          limit: 10 * 1024,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
