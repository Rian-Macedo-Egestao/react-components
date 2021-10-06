import React, { Component } from "react";
import "./CardNota.css"
import {ReactComponent as CloseSVG} from "../../assets/close.svg"

class CardNotas extends Component{
    
    render(){

        return(
            <div>
                <header>
                <h2>{this.props.titulo} <CloseSVG/></h2>
                </header>
                
                <p>{this.props.texto}</p>
            </div>
        );
    }
}

export default CardNotas;