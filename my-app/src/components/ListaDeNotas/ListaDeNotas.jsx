import React, { Component } from "react";
import CardNotas from "../CardNota";

class ListaDeNotas extends Component{

    render(){
        return (
            <div>
                <ul>
                    {this.props.notas.map((nota, index) => {
                        return(
                            <li key= {index}>
                                <CardNotas titulo = {nota.titulo} texto = {nota.texto}/>
                            </li>
                        );     

                    })}
                </ul>
            </div>

        );
    }

}
export default ListaDeNotas;