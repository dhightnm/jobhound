const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'client', 'dist');

module.exports = {
  devtool: 'source-map',
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  
};