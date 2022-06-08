import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RequestData from '../hooks/RequestData'
import useForm from '../hooks/useForm'
import { goToListTripsPage } from '../routes/Coordinator'
import { countries } from '../routes/countries'
import { sendApplication } from '../routes/request'

const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [tripId, setTripId] = useState("")
    const listTrips = RequestData("/trips")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const clearFields = () => {
        clear()
        setTripId("")
    }

    const onClickSend = (event) => {
        event.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }



    const selectTrips = listTrips && listTrips.map((list) => {
        return <option key={list.id}>{list.name}</option>
    })

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={onClickSend}>
                <select defaultValue="" onChange={onChangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {selectTrips}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}

                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option name={"Escolha um país"} value={""} >Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <div>
                    <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ApplicationFormPage
