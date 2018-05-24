import express from 'express'
import cors from 'cors'
import {Server} from 'http'

const port = 8080
const app = express();
const server = new Server(app)

if (process.env.NODE_ENV == 'development') {
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.conf');
    const webpackCompiler = webpack(webpackConfig);
  
    app.use(require('webpack-dev-middleware')(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
      noInfo: true,
      hot: false,
      inline: true,
      lazy: false,
      historyApiFallback: true,
      quiet: true,
    }));
  
    app.use(require('webpack-hot-middleware')(webpackCompiler));
  }
app.use(cors())
app.use(express.static('public'))

server.listen(`${port}`, function() {
    console.log(`listening on port ${port}`)
})