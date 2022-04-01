import React from 'react'
import { goToHomePage, goToApplicationFormPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            <h3>Lista de Viagens</h3>
        </div>
    )
}

export default ListTripsPage