import { Component } from 'react';
import './assets/App.css';
import FormularioNotas from './components/FormularioNotas/';
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/';
import Categorias from './dados/Categorias'
import Notas from './dados/Notas'

class App extends Component {
  constructor(){
    super();
    this.notas = new Notas()
    this.categorias = new Categorias();
  }
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
              <FormularioNotas categorias={this.categorias} criarNota= {this.notas.novaNota.bind(this.notas)}  />
            </div>
            <div  className="col-sm-5">
              <ListaDeCategorias categorias={this.categorias} criarCategoria={this.categorias.novaCategoria.bind(this.categorias)}/>
              <ListaDeNotas apagarNota={this.notas.apagarNota} notas={this.notas}/>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
