import React from "react";

export default class Etapa1 extends React.Component {
    render() {
        return <div>
            <h2> DADOS GERAIS</h2>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
            <p>2. Qual sua idade?</p>
            <input type="number" />
            <p>3. Qual seu email?</p>
            <input type="text" />
            <p>4. Qual a sua escolaridade?</p>
            <select name="select">
                <option selected >Ensino médio inconpleto</option>
                <option >Ensino Médio Completo</option>
                <option >Ensino Superior Incompleto</option>
                <option >Ensino Superior Completo</option>
            </select>
        </div>

    }


}