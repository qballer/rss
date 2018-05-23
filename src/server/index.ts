import express from 'express'
import {Server} from 'http'
import * as path from 'path'

const port = 8000
const app = express();
const server = new Server(app)
const indexPath = path.resolve(path.normalize(__dirname + '/../../' +'index.html'))

console.log(`index is at: ${indexPath}`)

app.use(express.static('public'))

server.listen(`${port}`, function() {
    console.log(`listening on port ${port}`)
})