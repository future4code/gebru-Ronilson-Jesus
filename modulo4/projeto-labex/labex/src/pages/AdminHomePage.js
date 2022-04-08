import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage, goToLoginPage } from '../routes/Coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import RequestData from '../hooks/RequestData'


const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const trips = RequestData("/trips")

    const listTrips = trips.map((list) => {
        return <div key={list.id}>
            <p><b>Viagem:</b> {list.name}</p>
        </div>
    })

    const logout = (navigate) => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
                <button onClick={() => logout(navigate)}>Logout</button>
            </div>
            {listTrips && listTrips.length > 0 ? listTrips : <p>Caregando...</p>}
        </div>
    )
}

export default AdminHomePage