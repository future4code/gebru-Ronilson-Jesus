import React from 'react';
import SignUpPage from "./comp/SignUpPage";
import Users from "./comp/Users";
import { Header } from './estilo/Style'
 
class App extends React.Component {
  state = {
    currentPage: "signUp"
  }

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render(){
    return (
        <div>
          <Header>Labefy
          <button onClick={this.changePage}>Trocar de tela</button>
          <br/>
          </Header>
          {this.state.currentPage === "signUp" ? <SignUpPage /> : <Users />}
        </div>
    );
  }
  
}


export default App