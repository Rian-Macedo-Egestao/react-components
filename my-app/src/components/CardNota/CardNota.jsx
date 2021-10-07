import React, { Component } from "react";
import "./CardNota.css"
import {ReactComponent as CloseSVG} from "../../assets/close.svg"

class CardNotas extends Component{
    
    render(){

        return(
            <div class="card container card-margin">
                <div class="card-body row">
                    
                    <h2 className="card-title col-12">{this.props.titulo} <CloseSVG/></h2>       
                    <p className="card-text   col-12">{this.props.texto}</p>
                    
                </div>
            </div>
    
            
        );
    }
}

export default CardNotas;