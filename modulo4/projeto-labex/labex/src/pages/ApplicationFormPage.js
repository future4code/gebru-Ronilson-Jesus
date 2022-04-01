import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage } from '../routes/Coordinator'

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <select>
                <option value="">Escolha uma Viagem</option>
            </select>
            <input
                placeholder={"Nome"}
                name={"name"}
                title={""}
                required
            />
            <input
                placeholder={"Idade"}
                type={"number"}
                name={"age"}
            />
            <input
                placeholder={"Texto de Candidatura"}
                name={"applicationText"}
            />
            <input
                placeholder={"Profissão"}
                name={"Profissão"}
            />
            <select
                placeholder={"País"}
                name={"country"}
            >
                <option name={"Escolha um país"} value={""} >Escolha um País</option>
            </select>
            <div>
                <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
                <button>Enviar</button>
            </div>

        </div>
    )
}

export default ApplicationFormPage
