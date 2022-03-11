import React from "react";

export default class Etapa1 extends React.Component {

    render() {
        
        return <div>
            
            <input type="text" 
            value={this.props.userInput}
            onChange={this.props.onUserTextChange}
            placeholder="Nome"
            />
    
            <input type="text" 
            value={this.props.emailInput}
            onChange={this.props.onEmailTextChange}
            placeholder="E-mail"
            />
            <button onClick={this.props.createUser}>Criar usuário</button>
            
        </div>

    }


}
