import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import { goToAdminHomePage } from '../routes/Coordinator'

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Criar Viagem</h1>
            <input
                placeholder={"Nome"}
                name={"name"}
            />
            <select
                placeholder={"Planeta"}
                name={"planet"}
            >
                <option value={""}>Escolha um Planeta</option>
            </select>
            <input
                placeholder={"Data"}
                type={"date"}
                name={"date"}
            />
            <input
                placeholder={"Descrição"}
                name={"description"}
                title={"O nome deve ter no mínimo 30 caracteres"}
            />
            <input
                placeholder={"Duração em dias"}
                type={"number"}
                name={"duration"}
            />
            <div>
                <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
                <button >Criar</button>
            </div>
        </div>
    )
}

export default CreateTripPage
