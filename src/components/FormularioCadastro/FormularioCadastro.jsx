import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        onChange={(event) => {
          let tmpNome = event.target.value;

          /*if(tmpNome.length >= 3){
                tmpNome = tmpNome.substr(0,3)
            }*/

          setNome(tmpNome);
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
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        value={sobrenome}
        id="sobrenome"
        margin="dense"
        fullWidth
        size="small"
        label="Sobrenome"
        variant="outlined"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        margin="dense"
        fullWidth
        size="small"
        label="CPF"
        variant="outlined"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            name="Promoções"
            onChange={(event) => {
                setPromocoes(event.target.checked)
            }}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="Novidades"
            onChange={(event) => {
                setNovidades(event.target.checked)
            }}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
