import React, { Component } from "react";

class FormularioNotas extends Component {
    render(){
        return (
            <form action="" method="">
                <input type="text" placeholder="titulo"></input>
                <textarea placeholder="escreva sua nota..."></textarea>
                <button type="submit">Nova Nota</button>
            </form>
        );

    }
}
export default FormularioNotas;