const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  node: './node_modules'
};

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './scripts/index'
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
    ])
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
    inline: true,
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
