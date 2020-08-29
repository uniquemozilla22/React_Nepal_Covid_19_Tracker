import React, { Component } from 'react'
import Headers from '../Containers/Headers/Headers'
import Body from './Body/Body'

export default class Containers extends Component {
    render() {
        return (
            <div>
                <Headers></Headers> 
                <Body></Body>  
            </div>
        )
    }
}
