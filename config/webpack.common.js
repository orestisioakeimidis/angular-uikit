const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfill': './src/demo-app/polyfill.ts',
    'vendor': './src/demo-app/vendor.ts',
    'app': './src/demo-app/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill']
    }),

    new HtmlWebpackPlugin({
      template: 'src/demo-app/index.html'
    })
  ]
};
