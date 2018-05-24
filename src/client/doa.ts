import PouchDB from 'pouchdb';
import {getFeed} from './feed'

export const dbname = 'rss-feed-yo'

const defaultOptions = {
    size:100
}

export interface Feed {
    name: string
    link: string
}

export function CreateClient(cb:any, name:string = dbname , options = defaultOptions) {
    const db = new PouchDB(name, Object.assign({}, options, defaultOptions))
    return {
        db,
        createConnections: function () {
            let feeds: {[key:string]:Feed} ={
                echojs: {
                    name: 'echojs',
                    link: 'https://echojs.com/rss'
                }
            }
            db.get('feeds')
            .then(function(info) {
                let localfeed = (info as any).feeds
                feeds = localfeed.length > 0 ? localfeed : feeds
                if (localfeed.length == 0 ) {
                    (info as any).feeds = feeds
                    return db.put(info)
                }
                return {}
            }).catch(function(){
                return db.put({_id:'feeds', feeds:feeds})
            }).then(function(){
                console.log('wat wat!')
                debugger
                Object.keys(feeds).forEach(function(name){
                    let callMe = function(){
                        console.log('call Me maybe..')
                        let info = feeds[name]
                        return getFeed(info.link)
                                .then(function(feed){
                                    cb(info, feed)
                                })
                    }
                    callMe()
                    setInterval(callMe, 30 * 1000)
                })
            })
        }

    }
}
