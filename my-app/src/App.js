import { Component } from 'react';
import './App.css';
import FormularioNotas from './components/FormularioNotas';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Bloco de Notas</h1>
        <div> 
          <FormularioNotas></FormularioNotas>
        </div>
        <div>
          <ListaDeNotas/>
        </div>
  
      </div>
    );
  }
  
}

export default App;
