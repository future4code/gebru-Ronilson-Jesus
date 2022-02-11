import React from "react";


export default class Etapa3 extends React.Component {
    render() {
        return <div>
            <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
            <p>7. Por que você não terminou um curso de graduação?</p>
            <input type="text" />
            <p>8. Você fez algum curso complementar?</p>
            <select name="select">
                <option selected >Curso técnico</option>
                <option >Cursos de inglês</option>
                <option >Não fiz curso complementar</option>
            </select>
        </div>

    }
}