import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
  //const nome = useState("Josué");
  
  const [nome, setNome] = useState("Josué");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextField
        onChange={(event) =>{
            setNome(event.target.value)
            if(nome.length >= 3){
                setNome(nome.substr(0,3))
            }
        }}
        value={nome}
        id="nome"
        margin="dense"
        fullWidth
        size="small"
        label="Nome"
        variant="outlined"
      />

      <TextField
        id="sobrenome"
        margin="dense"
        fullWidth
        size="small"
        label="Sobrenome"
        variant="outlined"
      />

      <TextField
        id="cpf"
        margin="dense"
        fullWidth
        size="small"
        label="CPF"
        variant="outlined"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked color="primary" />}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
