import React, { Component } from "react";

class FormularioNotas extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto  = "";
        this.categoria = "";
        this.state  = {categorias: []}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this.novasCategorias.bind(this));
    }
    novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handleTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        
    };
    handleTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
        
    };
    handleCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }
    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.categoria, this.texto)
    }

    render(){
        return (
            <form onSubmit={this.criarNota.bind(this)}>
                <div className="form-group">
                <select>
                        {this.props.categorias.categorias.map(
                            (categoria, index)=>{
                                return(
                                    <option onChange={this.handleCategoria.bind(this)} key={index}>{categoria}</option>
                                );
                            }

                        )}
                </select>
                </div>
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