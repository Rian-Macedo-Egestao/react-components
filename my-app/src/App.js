import { Component } from 'react';
import './assets/App.css';
import FormularioNotas from './components/FormularioNotas/';
import ListaDeNotas from './components/ListaDeNotas/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArray = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArray
    } 
    this.setState(novoEstado);
  }

  render(){
    return (
      <div>
        <h1>Bloco de Notas</h1>
        <div> 
          <FormularioNotas criarNota= {this.criarNota.bind(this)}  />
        </div>
        <div>
          <ListaDeNotas notas={this.state.notas}/>
        </div>
  
      </div>
    );
  }
  
}

export default App;
