import React, { Component } from "react";
import "./CardNota.css"

class CardNotas extends Component{
    
    render(){

        return(
            <div>
                <h2>{this.props.titulo}</h2>
                <p>{this.props.texto}</p>
            </div>
        );
    }
}

export default CardNotas;