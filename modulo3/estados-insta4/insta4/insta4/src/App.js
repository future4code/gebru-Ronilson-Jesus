import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    postar: [
      {
        nomeUsuario: 'Viagens',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?grayscale'
      },
      {
        nomeUsuario: 'Pedrão Cabral',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?grayscale'
      },
      {
        nomeUsuario: 'Vi',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?grayscale'
      }
    ],

    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputPostUsuario: ""

  }

  adicionaPost = () => {

    const novoPost = {

      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputPostUsuario

    }
    const novosPosts = [...this.state.pessoas, novoPost]
    this.setState({ pessoas: novosPosts })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputPostUsuario = (event) => {
    this.setState({ valorInputPostUsuario: event.target.value })
  }


  render() {
    const listaPost = this.state.postar.map((postando) => {
      return (
        <Post   
          nomeUsuario= {postando.nomeUsuario}
          fotoUsuario= {postando.fotoUsuario}
          fotoPost= {postando.fotoPost}
        />
      )

    })
    return (
      <MainContainer>
        <input 
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Foto"}
          />
          <button onClick={this.adicionaPost}>Postar</button>



       {listaPost}
       </MainContainer>
    );
  }
}

export default App;
