import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {FeedViewer} from './components'
import {CreateClient, Feed} from './feedStream'

(function startApp(){
    let client = CreateClient()
    client.createConnections(function(_info:Feed, items:any){
        ReactDOM.render(<FeedViewer feed={items}/>, document.getElementById('app-root'))
    })
})()



