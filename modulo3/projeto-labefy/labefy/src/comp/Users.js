import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserDetail from "./UserDetail";
import { Lista } from "./StyleList";
import { MeuEstilo } from "../estilo/Style";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`

const axiosConfig = {
  headers: {
    Authorization: "ronilson-souza-gebru"
  }
};

class Users extends React.Component {
  state = {
    playlists: [],
    currentPage: "playlists",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
      })
  }

  deletePlaylist = (userId) => {
    if (window.confirm("Tem certeza que deseja apagar a playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!")
          this.getAllPlaylists()
        })
        .catch((e) => {
          alert("ERRO AO APAGAR USUARIO")
        });
    }
  };

  mudapagi = (userId) => {
    if (this.state.currentPage === "playlists") {
      this.setState({ currentPage: "UserDetail", userId: userId })
    } else {
      this.setState({ currentPage: "playlists", userId: "" })
    }
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`,
        axiosConfig
      )
      .then((res) => {
        this.setState({ playlists: res.data.result.playlist })
        this.setState({ name: "" })
      })
      .catch(() => {
        alert("Usuário não encontrado")
        this.getAllPlaylists()
      });
  };

  render() {
    const buscarPlaylist = this.state.playlists.map((playlist) => {
      return <li key={playlist.id}>
        {playlist.name}
      </li>
    })

    return (
      <div>
        {this.state.currentPage === "playlists" ? (
          <MeuEstilo>
              <h4>Procurar playlist</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br/>
            <button onClick={() => this.handleSearchUser(buscarPlaylist)}>Pesquisar</button>
            <br/>
            {this.state.playlists.map((user) => {
              return <Lista key={user.id}>
                <span onClick={() => this.mudapagi(user.id)}>
                  {user.name}
                </span>
                <DeleteButton
                  onClick={() => this.deletePlaylist(user.id)}
                >
                  X
                </DeleteButton>
              </Lista>
            })}
          </MeuEstilo>
        ) :
          <UserDetail userId={this.state.userId} mudapagi={this.mudapagi} />
        }
      </div>
    );
  }
}

export default Users;
