import React, { Component } from "react";

class ListaDeCategorias extends Component{
    constructor(props){
        super(props);
        this.categoria = "";
    }

    handlerInputCategoria(evento){
        console.log(evento.key);
        if (evento.key  == "Enter"){
            console.log("adicionado categoria");
            this.categoria = evento.target.value;
            console.log(this.categoria);
        }
    }

    render(){
        return(

            <div>
                
                <div>
                    <label htmlFor="categoria">categoria: </label>
                    <input type="text" id="categoria" placeholder="categoria..." onKeyUp={this.handlerInputCategoria.bind(this)}></input>
                </div>
                
                <ul>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                </ul>
            </div>

        );
    }

}
export default ListaDeCategorias