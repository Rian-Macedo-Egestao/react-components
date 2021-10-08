import React, { Component } from "react";

class ListaDeCategorias extends Component{
    constructor(props){
        super(props);
        this.categoria = "";
        this.state = {categorias: []}
        this.referenciaCategoria = this.novasCategorias.bind(this);
    }
    componentDidMount(){
        this.props.categorias.inscrever(this.referenciaCategoria);
    }
    componentWillUnmount(){
        this.props.categorias.desinscrever(this.referenciaCategoria);
    }

    novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handlerInputCategoria(evento){
        if (evento.key  === "Enter"){
            this.categoria = evento.target.value;
            this.props.categorias.novaCategoria(this.categoria);
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
                    {this.state.categorias.map((itemCategoria, index) => {
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