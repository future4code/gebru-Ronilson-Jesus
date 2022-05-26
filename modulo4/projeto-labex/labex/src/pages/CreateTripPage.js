import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import useProtectedPage from '../hooks/useProtectedPage'
import { goToAdminHomePage } from '../routes/Coordinator'
import { planets } from '../routes/planet'
import { createTrip } from '../routes/request'

const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const {form, onChange, clear} = useForm ({name: "", planet: "", date: "", description: "", durationInDays: ""})

    const onClickCreate = (event) => {
        event.preventDefault()
        createTrip(form, clear)
    }

    return (
        <div>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCreate}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
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
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                    required
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
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
