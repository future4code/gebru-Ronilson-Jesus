import React from "react";
import axios from "axios";
import { MeuEstilo } from "../estilo/Style";

class SignUpPage extends React.Component {
  state = {
    name: "",
  }

  handleNameChange = event => {
    const newNameValue = event.target.value
    this.setState({ name: newNameValue })
  }


  handleCreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "ronilson-souza-gebru"
      }
    }
    const body = {
      name: this.state.name
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Playlist ${this.state.name} criado com sucesso!`)
        this.setState({ name: ""})
      })
      .catch(error => {
        alert("Erro ao criar o usuário")
        console.log(error)
      })
  }

  render() {
    return (
      <div>
      <MeuEstilo>
        <h3>Crie sua playlist</h3>
        <input
          placeholder="Nome da playlist"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleCreateUser}>Criar Playlist</button>
      </MeuEstilo>
      <hr/>
      </div>
    )
  }
}

export default SignUpPage;
