const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'transform-runtime']
        }
      }
    ]
  }
};
