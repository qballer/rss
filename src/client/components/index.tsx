import * as React from 'react'
import './style.css'

export interface FeedViewerProps {
    feed: any
}
export interface ItemInfo {
    id: string
    description: string
    link: string
    title: string
}

function parseDescription(desc:string): string{
    const position = desc.indexOf('"')
    const result = desc.slice(position+1, desc.indexOf('"', position+1))
    return result
}

export function FeedItem(props:ItemInfo){
    return <div className="item" key={props.id}>
        <span><a href={props.link}> {props.title} </a></span>
        <span><a href={parseDescription(props.description)}>{'</>'}</a></span>
    </div>

}

export function FeedViewer(props: FeedViewerProps) {
    return <div className="container">{props.feed.items.map(FeedItem)}</div>
}

