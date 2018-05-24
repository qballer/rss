const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const path = require('path')

const htmlPath = path.resolve('./assets/index.html')

module.exports = {
    mode: 'development',
    entry: {
      main: './src/client',
      tests: 'mocha-loader!./test/client'
    },
    devtool: "eval",
    module: {
      rules: [{
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }, {
            test: /\.css?$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        chunks: ['main'],
        template: htmlPath,
    }),
    new HtmlWebpackPlugin({
        chunks: ['tests'],
        template: htmlPath,
        filename: 'tests.html'
    })] 
  };