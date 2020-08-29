import React from 'react'
import './info.css'


const Info = (props) => {
    let classType=""

    if (props.number===null){
        props.number=0;
    }
    classType="card text-white bg-"+props.type+" mb-4"
    
    switch(props.title)
    {
        case "tested negative":{
            classType="card text-white bg-success mb-4"
            break;
        }
        case "tested total":{
            classType="card text-black bg-warning mb-4"
            break;
        }
        case "tested positive":{
            classType="card text-white bg-danger mb-4"
            break;
        }
        case "quarantined":{
            classType="card text-white bg-danger mb-4"
            break;
        }
        case "in isolation":{
            classType="card text-white bg-success mb-4"
            break;
        }
        case "recovered":{
            classType="card text-white bg-success mb-4"
            break;
        }
        case "deths":{
            classType="card text-white bg-danger mb-4"
            break;
        }
        default:{
            classType="card text-white bg-info mb-4"
            break;

        }
    }
    let width="col-xs-4 col-md-4"
    switch(props.widths){
        case "100%":{
            width="col-12"
            break;
        }
        default:{
            width="col-xs-4 col-md-4"
            break;
        }
    }
    return (
        <div className={width} >
            <div className={classType}>
            <div className="card-header">{props.title}</div>
             <div className="card-body">
            <h5 className="card-title">{props.number}</h5>
         </div>
        </div>
        </div>
    )
}

export default Info

