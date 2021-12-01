import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() { 
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}
 
export default App;
