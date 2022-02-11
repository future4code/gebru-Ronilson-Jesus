import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
`

const MensagensContainer = styled.div`
   display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 16px;
`

const NameInput = styled.input`
  width: 100px;
`
const InputsContainer = styled.div`
  display: flex;
`

const MensagemInput = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    valorUsuario: '',
    valorMensagem: '',
    mensagens: [],
    
  }

  onChangevalorUsuario = (event) => {
    this.setState({valorUsuario: event.target.value})
  }

  onChangevalorMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})

    // document.addEventListener("Keypress", function(e){
    //   if(e.key === "Enter"){
    //     const enviar = document.querySelector(e)
    //     enviar.click()
    //   }
    // })
  }

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorUsuario, texto: this.state.valorMensagem
    }

    const novaMensagemArray = [novaMensagem, ...this.state.mensagens]
    this.setState({mensagens: novaMensagemArray, valorMensagem: ''})
    
  }

  render() {
    return (
      <AppContainer>
        
        <MensagensContainer>
          {this.state.mensagens.map((mensagem) => {
            return <p>
              <b>{mensagem.usuario}</b>: {mensagem.texto}
            </p>
          })}
        </MensagensContainer>

        <InputsContainer>

          <NameInput
            onChange={this.onChangevalorUsuario} 
            value={this.state.valorUsuario} 
            placeholder={'Nome'}

          />
          
          <MensagemInput 

            onChange={this.onChangevalorMensagem} 
            value={this.state.valorMensagem} 
            placeholder={'Mensagem'}

          />

          <button onClick={this.enviarMensagem}>Enviar</button>

        </InputsContainer>

      </AppContainer>
    );
  }
}

export default App;