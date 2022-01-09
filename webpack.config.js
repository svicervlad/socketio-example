const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.join(__dirname, 'app/build'),
    filename: 'main.js'
  },
  devServer: {
    port: 3000,
    liveReload: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
