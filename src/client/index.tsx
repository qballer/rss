import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {FeedViewer} from './components'
import {getFeed} from './feed'
import {CreateClient, Feed} from './doa'

const currentFeed = 'echojs'

export function render() {
    return getFeed('https://echojs.com/rss')
                .then(feed => {
                    ReactDOM.render(<FeedViewer feed={feed}/>, document.getElementById('app-root'))
                })
}

(function startApp(){
    console.log('Hello App')
    let client = CreateClient(function(info:Feed, items:any){
        if(info.name == currentFeed) {
            ReactDOM.render(<FeedViewer feed={items}/>, document.getElementById('app-root'))
        }
    })
    client.createConnections()
})()



