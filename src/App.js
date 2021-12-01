import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() { 
    return (
      <>
      <h1>Formulário</h1>
      <FormularioCadastro />
      </>
    );
  }
}
 
export default App;
