import React from 'react';
import SignUpPage from "./comp/SignUpPage";
import Users from "./comp/Users";
import { Header, Button } from './estilo/Style'
 
class App extends React.Component {
  state = {
    currentPage: "signUp",
    page:"Playlist"
  }

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users", page: "Criar Playlist" });
    } else {
      this.setState({ currentPage: "signUp", page: "Playlist" });
    }
  };

  render(){
    return (
        <div>
          <Header>Labefy
          <Button onClick={this.changePage}>{this.state.page}</Button>
          </Header>
          {this.state.currentPage === "signUp" ? <SignUpPage /> : <Users />}
        </div>
    );
  }
  
}


export default App