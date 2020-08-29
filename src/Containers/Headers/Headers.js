import React from 'react'
import './Header.css'
import Logo from './logo/logo.js'
import Navigationitems from './NavigationItems/NavigationItems.js'

const  Headers = (props) => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
          <Logo width="150px" height="50px" />
    <button className="navbar-toggler" type="but    ton" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      <Navigationitems current={true}>Made By Yogesh</Navigationitems>  
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Headers


