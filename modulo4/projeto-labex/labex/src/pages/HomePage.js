import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../routes/Coordinator'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>LabeX</h1>
            <div>
                <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)} >Área de Admin</button>
            </div>
        </div>
    )
}

export default HomePage
