import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserDetail from "./UserDetail";
import { Lista, H2 } from "./StyleList";
import { MeuEstilo, Button } from "../estilo/Style";
import Excluir from "./img/excluir.png"

const DeleteButton = styled.span`
  cursor: pointer;
`
const ButtonPlaylist = styled.span`
    padding: 4px;
    margin-right: 170px;
    height: 30px;
    width: 35;
    &:hover{
    cursor: pointer;
    background-color: lightblue;
}
`
const labefy = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

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
        labefy,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
      })
  }

  deletePlaylist = (userId) => {
    if (window.confirm("Tem certeza que deseja apagar a playlist?")) {
      axios
        .delete(`${labefy}${userId}`, axiosConfig)
        .then(() => {
          this.getAllPlaylists()
        })
        .catch(() => {
          alert("Erro ao apagar playlist")
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

  handleSearchPlaylist = () => {
    axios
      .get(`${labefy}search?name=${this.state.name}`, axiosConfig)
      .then((res) => {
        this.setState({ playlists: res.data.result.playlist })
        this.setState({ name: "" })
      })
      .catch(() => {
        alert("Playlist não encontrada")
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
              placeholder="Pesquisar..."
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br />
            <Button onClick={() => this.handleSearchPlaylist(buscarPlaylist)}>Pesquisar</Button>
            <br />
            {this.state.playlists.map((user) => {
              return <Lista key={user.id}>
                <ButtonPlaylist onClick={() => this.mudapagi(user.id)}>
                  <H2>{user.name}</H2>
                </ButtonPlaylist>
                <DeleteButton
                  onClick={() => this.deletePlaylist(user.id)}
                >
                  <img src={Excluir} />
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
