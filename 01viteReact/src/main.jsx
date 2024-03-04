import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Hello react world</h1>
        </div>
    )
}
const val = " abhinav"

const anotherReactElem = React.createElement(
    'a',
    {href: 'https://facebook.com', target : '_blank'},
    'Open Facebook',
    val
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    anotherReactElem
    
  
)
