import React from 'react';
import './App.css';
import Etapa1 from './paginas/Etapa1';
import Etapa2 from './paginas/Etapa2';
import Etapa3 from './paginas/Etapa3';
import Etapa4 from './paginas/Etapa4';


class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Etapa4 />
      default:
        return <Etapa4 />
    }
  }

  mudandoPagi = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render() {

    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br/>
        {this.state.etapa !== 4 && <button onClick={this.mudandoPagi}>Próxima etapa</button>}
      </div>
    );
  }
}

export default App;
