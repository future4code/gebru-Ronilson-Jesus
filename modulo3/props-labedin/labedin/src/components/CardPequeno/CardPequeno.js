import React from 'react';
import './CardPequeno.css'



function CardPequeno(props) {
    return (
        <div className="link-redes">
            <img src={ props.imagem } /> 
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;