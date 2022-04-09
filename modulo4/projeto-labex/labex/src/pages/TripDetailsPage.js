import React from 'react'
import { useNavigate } from "react-router-dom"
import useProtectedPage from '../hooks/useProtectedPage'
import { goToAdminHomePage } from '../routes/Coordinator'
import { useState, useEffect } from "react";
import axios from "axios";


const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [listTrips, setListTrips] = useState([])

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = (id) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trip/${id}`)
            .then((res) => {
                setListTrips(res.data.trip)
            })
            .catch(() => { })

    }

    console.log(listTrips)


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
