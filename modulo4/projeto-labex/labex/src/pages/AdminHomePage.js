import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage } from '../routes/Coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
                <button >Logout</button>
            </div>
        </div>
    )
}

export default AdminHomePage