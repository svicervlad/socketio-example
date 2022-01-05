const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./app/main.js",
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, 'app/build'),
    filename: 'main.js'
  },
  devServer: {
    port: 3000,
    liveReload: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: './app/index.html' })
  ],
}
