import React, { Component } from 'react';
import Circle from '../Circle/Circle';
import './Light.css'

const color = {
    red:{
        backgroundColor:"red",
        boxShadow: "10px -19px 105px 33px rgba(243,19,19,0.96)",
        borderRight:"3px solid #fff",
    },
    yellow:{
        backgroundColor:"yellow",
        boxShadow: "10px -19px 105px 33px rgba(243,222,19,0.96)",
        borderRight:"3px solid #fff"
    },
    green:{
        backgroundColor:"green",
        boxShadow: "10px -19px 105px 33px rgba(19,243,57,0.96)",
        borderRight:"3px solid #fff"
    },
    grey:{backgroundColor:"grey"}
    
}

export default class Light extends Component {
    state = {
        red:color.red,
        yellow:color.grey,
        green:color.grey,
        next:'yellow'
    }
    handleLightChange = () =>{
        switch(this.state.next){
            case "red":
                this.setState({
                    red:color.grey,
                    yellow:color.grey,
                    green:color.green,
                    next:'green'
                });
                break;
            case "yellow":
                this.setState({
                    red:color.grey,
                    yellow:color.yellow,
                    green:color.grey,
                    next:'red'
                });
                break;
            case "green":
                this.setState({
                    red:color.red,
                    yellow:color.grey,
                    green:color.grey,
                    next:'yellow'
                });
                break;

        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.handleLightChange()
        },2000)
    }
    render() {
        return (
            <div className="light">
                <Circle color={this.state.red} />
                <Circle color={this.state.yellow} />
                <Circle color={this.state.green} />   
            </div>
        )
    }
}
