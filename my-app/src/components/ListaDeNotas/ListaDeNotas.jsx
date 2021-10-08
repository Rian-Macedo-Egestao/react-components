import React, { Component } from "react";
import CardNotas from "../CardNota";

class ListaDeNotas extends Component{
    constructor(props){
        super(props)
        this.state = {
            notas: [],
        
        }
        this.referenciaNota = this.novasNotas.bind(this)
    }
    componentDidMount(){
        this.props.notas.inscrever(this.referenciaNota);
        this.props.notas.notificar()
    }
    componentWillUnmount(){
        this.props.notas.desinscrever(this.referenciaNota);
    }
    novasNotas(notas){
        this.setState({...this.state, notas})
    }

    render(){
        return (
            <div>
                <ul className=" row list-unstyled">
                    {this.state.notas.map((nota, index) => {
                        return(
                            <li className="col-12" key= {index}>
                                <CardNotas indice={index} notas={this.props.notas}  titulo = {nota.titulo} texto = {nota.texto} categoria={nota.categoria}/>
                            </li>
                        );     
                    })}
                </ul>
            </div>
        );
    }
}
export default ListaDeNotas;