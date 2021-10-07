import React, { Component } from "react";

class ListaDeCategorias extends Component{
    constructor(props){
        super(props);
        this.categoria = "";
        this.state = {categorias: []}
    }
    componentDidMount(){
        this.props.categorias.inscrever(this.novascategorias.bind(this));
    }
    novascategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handlerInputCategoria(evento){
        if (evento.key  === "Enter"){
            this.categoria = evento.target.value;
            this.props.criarCategoria(this.categoria);
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
                    {this.props.categorias.categorias.map((itemCategoria, index) => {
                        return (
                        <li key={index}>{itemCategoria}</li>
                        );
                        })
                    }
                </ul>
            </div>

        );
    }

}
export default ListaDeCategorias