import './App.css';
import React from 'react';
import Etapa1 from './paginas/Etapa1';
import Etapa2 from './paginas/Etapa2';
import axios from 'axios';

const allUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const heders = {
  heders: {
    Authorization: "ronilson-souza-gebru"
  }
}



class App extends React.Component {

  state = {
    etapa: 1,
    users: [],
    userInput: "",
    emailInput: ""

  }
  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers= ()=>{
    axios
    .get(allUsers,heders)
    .then((res)=>{
      this.setState({users: res.data})
      console.log(res.data)
    })
    .catch((err)=>{
      alert(err.mesage)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.userInput,
      email: this.state.emailInput
    }
    axios
      .post(allUsers, body, heders)
      .then(() => {
        this.setState({ userInput: "" })
        this.setState({ emailInput: "" })
        alert("Usuário cadastrado com sucesso")
          .catch(() => {
            alert("Erro ao criar usuário")
          })
      })
    this.setState({ userInput: "" })
    this.setState({ emailInput: "" })
  }

  onUserTextChange = (event)=>{
    this.setState({userInput: event.target.value})
  }

  onEmailTextChange = (event)=>{
    this.setState({emailInput: event.target.value})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        this.setState({ etapa: this.state.etapa = 1 })
        return <Etapa1 />;
      default:
        return <Etapa2 />
    }
  }

  mudandoPagi = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    
    // const usersComponents = this.state.users.map ((novo)=>{
    //   return <li key={novo.id}> {novo.name}</li>
    // })
    return (

      <div>
        
        <br />
        {this.state.etapa !== 3 && <button onClick={this.mudandoPagi}>Trocar de tela</button>}
        <br />
        {this.renderizaEtapa()}



      </div>
    )
  }

}

export default App;
