import React, { Component } from "react";
import "./CardNota.css"
import {ReactComponent as CloseSVG} from "../../assets/close.svg"

class CardNotas extends Component{
    apagar(){
        const indice = this.props.indice;
        this.props.notas.apagarNota(indice);
    }
    
    render(){

        return(
            <div className  ="card container card-margin">
                <div className="card-body row">
                    
                    <h2 className="card-title col-12">{this.props.titulo} <CloseSVG onClick={this.apagar.bind(this)}/></h2>       
                    <h3>{this.props.categoria}</h3>
                    <p className="card-text   col-12">{this.props.texto}</p>
                    
                </div>
            </div>
    
            
        );
    }
}

export default CardNotas;