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
                
                <div className="form-group">
                    <label htmlFor="titulo">Titulo da nota</label>
                    <input 
                    maxLength="30"
                    className="form-control"
                    id="titulo"
                    type="text" 
                    placeholder="titulo"
                    onChange={this.handleTitulo.bind(this)}>
                    </input>
                </div>
                <div className="form-group">
                    <label  htmlFor="texto">Texto da nota</label>
                    <textarea className="form-control" id="texto" placeholder="escreva sua nota..."
                    onChange={this.handleTexto.bind(this)}></textarea>
                </div>
                
                <button className="btn btn-primary" type="submit">Nova Nota</button>
                
            </form>
        );

    }
}
export default FormularioNotas;