import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Foto from './img/imgpost/dobbyPerfil.jpg'
import FotoDobby from './img/imgpost/dobbyPost.jpg'
import FotoPedro from './img/imgpost/pedrao.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Dobby'}
          fotoUsuario={Foto}
          fotoPost={FotoDobby}
        />
        <Post
          nomeUsuario={'Pedrão Cabral'}
          fotoUsuario={'https://www.plataformamedia.com/wp-content/uploads/2020/09/16163647226054.jpg'}
          fotoPost={FotoPedro}
        />
        <Post
          nomeUsuario={'Viagens'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150?grayscale'}
        />
      </MainContainer>
    );
  }
}

export default App;
