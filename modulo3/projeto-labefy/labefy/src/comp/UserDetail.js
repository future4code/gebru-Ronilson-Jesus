import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Main, PlayerMusic } from "./StyleList";
import { MeuEstilo } from "../estilo/Style";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`

const labefy = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

const headers = {
    headers: {
        Authorization: "ronilson-souza-gebru"
    }
};

class UserDetail extends React.Component {
    state = {
        detalheList: [],
        listEdit: "editButton",
        name: "",
        artist: "",
        url: ""
    };

    componentDidMount() {
        this.detalheList()
    }

    detalheList = () => {
        axios
            .get(`${labefy}${this.props.userId}/tracks`, headers)
            .then((response) => {
                this.setState({ detalheList: response.data.result.tracks })

            })
            .catch((err) => {

            })
    }

    removeTrackFromPlaylist = (userId) => {
        if (window.confirm("Tem certeza que deseja apagar a musica?")) {
            axios
                .delete(`${labefy}${this.props.userId}/tracks/` + userId, headers)
                .then(() => {
                    alert("Playlist apagada")
                    this.detalheList()
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }

    changeUserEditionFiel = () => {
        if (this.state.listEdit === "editButton") {
            this.setState({ listEdit: "userEditForm" })
        } else {
            this.setState({ listEdit: "editButton" })
        }
    }

    onNameChange = (event) => {
        const novoNomeValor = event.target.value

        this.setState({ name: novoNomeValor })
    }

    onArtistChange = (event) => {
        const novoArtistValor = event.target.value

        this.setState({ artist: novoArtistValor })
    }

    onUrlChange = (event) => {
        const novoUrlValor = event.target.value

        this.setState({ url: novoUrlValor })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
            .post(
                `${labefy}${this.props.userId}/tracks`,
                body,
                headers
            )
            .then(() => {
                this.setState({ name: "", artist: "", url: "" })
                this.detalheList();
                this.changeUserEditionFiel();
                alert(`Playlist editada com sucesso!`)
            })
            .catch(() => {
                alert("Erro ao criar playlist")
            })
    }

    render() {
        const listEdit =
            this.state.listEdit === "editButton" ? (
                <button onClick={this.changeUserEditionFiel}>Adicionar musica</button>
            ) : (
                <div>
                    <input
                        placeholder="Nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        placeholder="Artist"
                        type="text"
                        value={this.state.artist}
                        onChange={this.onArtistChange}
                    />
                    <input
                        placeholder="Url"
                        type="url"
                        value={this.state.url}
                        onChange={this.onUrlChange}
                    />
                    <button onClick={this.addTrackToPlaylist}>Salvar musica</button>
                </div>
            )
        const listMusic = this.state.detalheList.map((list) => {
            return <PlayerMusic
                key={list.id}>
                <DeleteButton
                    onClick={() => this.removeTrackFromPlaylist(list.id)}>
                    x
                </DeleteButton>
                <b><h3>{`${list.artist} `}</h3></b> 
                <i>{`${list.name} `}</i>
                <audio src={list.url} controls></audio>
            </PlayerMusic>
        })

        return (
            <div>
                <Main>
                    <button onClick={this.props.mudapagi}>
                        Voltar para playlists
                    </button>
                    {listEdit}
                </Main>
                <hr />
                <Main>
                    {listMusic}
                </Main>
                
            </div>
        )
    }
}

export default UserDetail;
