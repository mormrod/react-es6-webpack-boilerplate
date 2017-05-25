const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-dev-plugin');

const paths = {
  node: './node_modules'
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  devtool: 'source-map',
  entry: {
    index: getEntrySources([
      './scripts/index'
    ])
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'js/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: `${paths.node}/onsenui/css/`,
        from: '**/*',
        to: 'css'
      }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'sportz-connect',
      filename: 'my-sw-file.js',
      filepath: './scripts/my-sw-file.js',
      maximumFileSizeToCacheInBytes: 4194304,
      staticFileGlobsIgnorePatterns: [/\.map/, /\.xml/],
      staticFileGlobs: [],
      runtimeCaching: [{
        handler: 'fastest',
        urlPattern: /^(.*)$/
      }]
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
  }
};
