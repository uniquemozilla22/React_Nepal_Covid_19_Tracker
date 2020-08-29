import React, { Component } from 'react'
import Info from './Info/Info'
import  './Body.css'
import Axios from 'axios';
import Option from './Info/option/option';



class Body extends Component{
    state={
        
    options:{},
    selected:""
    };

    componentDidMount(){
        Axios.get("https://nepalcorona.info/api/v1/data/nepal")
        .then(response=>{
            console.log(response.data.value)
            this.setState({
                ...this.state,
                options:response.data
            })
        })
    }

    handleChange=(event)=>{
        this.setState({
            ...this.state,
            selected:event.target.value
        })
    }
    render(){
        let printinfo=[]
        let options=[]
        Object.keys(this.state.options).map((key, i) => {
            if (typeof this.state.options[key] !== "object") {
            printinfo[i]=<Info key={i} type="success" number={this.state.options[key]} title={key.replace("_"," ")}/>
           options[i]=<Option key={key} value ={key} data={key.replace("_"," ")}></Option>
                     
                 }
           
                }
        )
        let full_depo="";
        if(this.state.selected!=="")
        {
            full_depo=<Info key={this.state.selected} type="success" number={this.state.options[this.state.selected]} title={this.state.selected.replace("_"," ")} widths="100%"/>

        }
       
       return(
        <div className="body">
            <select  onChange={this.handleChange} style={{'width':'100%','height':'50px'}}>
                    <option disabled selected>--Please select the required data you want to show---</option>
                    {options}
            </select>
            <div className="requested">
                <div className="row">
                <br /><br /><br />
                    {full_depo}
                </div>


            </div>
            <div class="result">

                <hr style={{'width':'100%','height':'50px'}}/>
                <div className="row">
                {printinfo}
                </div>

            </div>

                
        </div>
        )
    }
}

export default Body

