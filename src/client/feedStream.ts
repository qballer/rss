import PouchDB from 'pouchdb';
import {getFeed} from './feed'
export const dbname = 'rss-feed-yo'
export interface Feed {
    name: string
    link: string
    items: [{}]
}
export type cb = (fd:Feed, items:any)=>void
// const Limit = 1000;
const defaultOptions = {
    size:100
}

const defaultFeeds = {
    echojs: {
        name: 'echojs',
        link: 'https://echojs.com/rss',
        items: []
    }
}

export type DBClient = {
    db: PouchDB.Database,
    createConnections:(cb:any, incoming?: any, interval?:number)=>Promise<any>,
    updateFeed:(feed:any, name:string)=>void,
    closeConnections:()=>void,
    intervals: Array<NodeJS.Timer>
}
function callMe(cb:any, feeds:any, name:string, incoming = getFeed, ) {
    let info = feeds[name]
    return incoming(info.link)
            .then(function(feed:{}){
                value.updateFeed(feed, name)
                cb(info, feed)
            })
}
let value: DBClient

export function CreateClient(name:string = dbname , options = defaultOptions):DBClient {
    const db = new PouchDB(name, Object.assign({}, options, defaultOptions))
    if (value == null) {
        value = {
            intervals:[],
            db,
            createConnections: function (cb:any, incoming = getFeed, interval:number = 30 * 1000): Promise<any> {
                return db.get('feeds')
                .then(function(info) {
                    let localfeed = (info as any).feeds
                    return Object.keys(localfeed).length > 0 ? localfeed : defaultFeeds
                }).catch(function(){
                    return db.put({_id:'feeds', feeds:defaultFeeds, items:[]}).then(() => defaultFeeds)
                }).then(function(feeds){
                    Object.keys(feeds).forEach(function(name){
                        callMe(cb, feeds,name,incoming)
                        value.intervals.push(setInterval(()=> callMe(cb, feeds,name,incoming), interval))
                    })
                })
            },
            closeConnections: function(){
                value.intervals.forEach((connection)=> {
                    clearInterval(connection)
                })
                value.intervals = []

            },
            updateFeed: function(_feed:Feed, _name:string) {}
        }

    }
    return value
}
