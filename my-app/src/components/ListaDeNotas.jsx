import React, { Component } from "react";
import CardNotas from "./CardNota";

class ListaDeNotas extends Component{

    render(){
        return (
            <div>
                <ul>
                    <li>
                        <CardNotas/>
                    </li>
                    <li>
                        <CardNotas/>
                    </li>
                    <li>
                        <CardNotas/>
                    </li>
                </ul>
            </div>

        );
    }

}
export default ListaDeNotas;