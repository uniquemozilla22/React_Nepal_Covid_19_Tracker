import React from 'react'
import logo from '../../../assets/tenor.gif'

const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={logo} height={props.height} width={props.width} alt="Nepal-Logo"/>
        </div>
    )
}


export default Logo
