import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from '../routes/Coordinator'


const TripDetailsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <p><b>Nome:</b></p>
                <p><b>Descrição:</b></p>
                <p><b>Planeta:</b></p>
                <p><b>Duração:</b></p>
                <p><b>Data:</b></p>
            </div>
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            <li>

            </li>

            <h2>Candidatos Aprovados</h2>
            <li>

            </li>
        </div>
    )
}

export default TripDetailsPage
