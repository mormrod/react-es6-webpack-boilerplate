const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const webpack = require('webpack');

const paths = {
  node: './node_modules'
};

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './scripts/index'
  },
  output: {
    filename: 'dist/js/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: `${paths.node}/onsenui/css/`,
        from: '**/*',
        to: 'dist/css'
      }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'sportz-connect',
      filename: 'my-sw-file-cache.js',
      minify: true,
      directoryIndex: '/',
      mergeStaticsConfig: true,
      maximumFileSizeToCacheInBytes: 4194304,
      staticFileGlobsIgnorePatterns: [/\.map/, /\.xml/],
      staticFileGlobs: [],
      runtimeCaching: [
        {
          handler: 'fastest',
          urlPattern: /\/*/,
        }
      ],
      verbose: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'jsx', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
