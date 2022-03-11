import React from "react";

export default class Etapa2 extends React.Component {
    render() {   
           
        return <div>
            {this.props.usersComponents}
            <p> <b>Procurar usuário</b> </p>
           <input type="email" 
          
           placeholder="Nome extato para busca"
           />
           <button>Salvar edição</button>
        </div> 
    }
}