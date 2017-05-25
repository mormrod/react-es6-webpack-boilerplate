const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-dev-plugin');

const paths = {
  node: './node_modules'
};

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      './scripts/index',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'dev/js/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: `${paths.node}/onsenui/css/`,
        from: '**/*',
        to: 'dev/css'
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
    })
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
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
