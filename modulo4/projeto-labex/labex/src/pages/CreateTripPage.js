import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import { goToAdminHomePage } from '../routes/Coordinator'
import { planets } from '../routes/planet'

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const onClickCreate = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCreate}>
            <input
                placeholder={"Nome"}
                name={"name"}
                required
            />
            <select
                placeholder={"Planeta"}
                name={"planet"}
                required
            >
                <option value={""}>Escolha um Planeta</option>
                {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
            </select>
            <input
                placeholder={"Data"}
                type={"date"}
                name={"date"}
                required
            />
            <input
                placeholder={"Descrição"}
                name={"description"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                required
            />
            <input
                placeholder={"Duração em dias"}
                type={"number"}
                name={"duration"}
                required
            />
            <div>
                <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
                <button >Criar</button>
            </div>
            </form>
        </div>
    )
}

export default CreateTripPage
