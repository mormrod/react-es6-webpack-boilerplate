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
  entry: {
    index: getEntrySources([
      './scripts/index'
    ])
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/bundle.js'
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
      maximumFileSizeToCacheInBytes: 4194304,
      staticFileGlobsIgnorePatterns: [/\.json/, /\.map/, /\.xml/],
      staticFileGlobs: [],
      runtimeCaching: [{
        handler: 'fastest',
        urlPattern: /^http:\/\/(www\.)?localhost$/
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
        test: /\.jpg$/,
        loaders: ['file']
      }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
