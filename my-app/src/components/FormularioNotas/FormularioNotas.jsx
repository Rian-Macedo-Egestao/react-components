import React, { Component } from "react";

class FormularioNotas extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto  = "";
    }
    handleTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        
    };
    handleTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
        
    };
    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto)
    }

    render(){
        return (
            <form onSubmit={this.criarNota.bind(this)}>
                <input 
                type="text" 
                placeholder="titulo"
                onChange={this.handleTitulo.bind(this)}>
                </input>
                <textarea placeholder="escreva sua nota..."
                onChange={this.handleTexto.bind(this)}></textarea>
                <button type="submit">Nova Nota</button>
            </form>
        );

    }
}
export default FormularioNotas;