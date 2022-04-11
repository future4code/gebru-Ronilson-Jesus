import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../routes/Coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import RequestData from '../hooks/RequestData'
import { deleteTrip } from '../routes/request'

const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const trips = RequestData("/trips")

    const listTrips = trips && trips.map((list) => {
        return <div key={list.id} >
            <p onClick={() => goToTripDetailsPage(navigate, list.id)}><b>Nome:</b> {list.name}</p>
            <button onClick={() => deleteTrip(list.id)}> apagar</button>
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