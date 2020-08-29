import React from 'react'
import './NavigationItems.css'

const Navigationitems = (props) => {
    
    let current;
    if (props.current){
        current=<span className="sr-only">{props.current}</span> 
    }
    return (
        <div className="navigationitems">
            <li className="nav-item active">
          <a className="nav-link" href="https://www.yogesh-bhattarai.com">{props.children}
          {current}
              </a>
        </li>
        </div>
    )
}
export default Navigationitems
