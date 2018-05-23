import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.css'

function Hello(_props:any) {
    return <div className="hello">Hello World</div>
}

ReactDOM.render(<Hello/>, document.getElementById('app-root'))
