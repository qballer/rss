const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
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
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/index.html',
            filename: 'index.html'
        })
    ]
  };