import React from 'react'
import { goToHomePage, goToApplicationFormPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import RequestData from '../hooks/RequestData'

const ListTripsPage = () => {
    const navigate = useNavigate()
    const trips = RequestData("/trips")

    const listTrips = trips.map((list) => {
        return <div key={list.id}>
            <p><b>Nome:</b> {list.name}</p>
            <p><b>Descrição:</b> {list.description}</p>
            <p><b>Planeta:</b> {list.planet}</p>
            <p><b>Duração:</b> {list.durationInDays}</p>
            <p><b>Data:</b> {list.date}</p>
        </div>
    })

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            <h3>Lista de Viagens</h3>
            {listTrips}
        </div>
    )
}

export default ListTripsPage