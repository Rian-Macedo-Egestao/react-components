import { Component } from 'react';
import './assets/App.css';
import FormularioNotas from './components/FormularioNotas/';
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas:[],
      categoria:[]
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
  apagarNota(index){
    console.log("chama apagar: " + index)
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)
    const novoEstado = {
      notas:arrayNotas
    }
    this.setState(novoEstado)
  }

  criaCategoria()

  render(){
    return (
      <div>
        <div className="">
          <header className=" row justify-content-md-center bg-success text-light">
            <h1 className="text-center">Bloco de Notas</h1>
          </header>
        </div>
        <div className="container ">
          <div className="row justify-content-center sessao-margin">
            <div className="col-sm-5"> 
              <FormularioNotas criarNota= {this.criarNota.bind(this)}  />
            </div>
            <div  className="col-sm-5">
              <ListaDeCategorias/>
              <ListaDeNotas apagarNota={this.apagarNota.bind(this)} notas={this.state.notas}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
