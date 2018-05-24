import * as htmlparser from 'htmlparser2'

const feedHandler = require('htmlparser2').FeedHandler
const feedPrefix = 'https://cors-anywhere.herokuapp.com/'

const fetchOptions = {
    headers:{
        'X-Requested-With':'',
        'Connection': 'keep-alive'
    }
}

function getXML(result:Response): Promise<string>{
    return result.text()
}

function parseFeed(xml:string): Promise<{}> {
    return new Promise(function (resolve, reject){
        let handler = new feedHandler(function(error:any, feed:any) {
            return !error ? resolve(feed) : reject(error)
        })
        let feed = new htmlparser.Parser(handler, {xmlMode:true})
        feed.write(xml)
        feed.end()
    })
}

export function getFeed(url:string, proxy = feedPrefix): Promise<{}>{
    return fetch(`${proxy}${url}`, fetchOptions)
        .then(getXML)
        .then(parseFeed)
}
