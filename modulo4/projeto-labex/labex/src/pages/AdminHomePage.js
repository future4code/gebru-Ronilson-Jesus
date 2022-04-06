import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage, goToLoginPage } from '../routes/Coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import { useEffect } from "react"
import axios from "axios"

const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()


    const getData = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trip/SpzKSVZWJq3BKOqOxWK7`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => 
                console.log(res)
            )
            .catch((err) => {
                alert(err.response)
            })
    }

    useEffect(() => {
        getData()
    }, [])


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
        </div>
    )
}

export default AdminHomePage