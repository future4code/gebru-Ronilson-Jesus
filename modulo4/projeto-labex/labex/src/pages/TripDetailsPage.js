import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import useProtectedPage from '../hooks/useProtectedPage'
import { goToAdminHomePage } from '../routes/Coordinator'
import { decideCandidate } from '../routes/request'

const TripDetailsPage = () => {
    useProtectedPage()
    const { id } = useParams()
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState()

    useEffect(() => {
        getListTrips()
    }, [])

    const getListTrips = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trip/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) => {
                setTripDetails(res.data)
            })
            .catch(() => { })
    }
    console.log(tripDetails)

    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
        return <div key={candidate.id}>
            <p><b>Nome:</b> {candidate.name}</p>
            <p><b>Profissão:</b> {candidate.profession}</p>
            <p><b>Idade:</b> {candidate.age}</p>
            <p><b>País:</b> {candidate.country}</p>
            <p><b>Texto de Candidatura:</b> {candidate.applicationText}</p>
            <button onClick={() => decideCandidate(id,candidate.id,true)}>Aprovar</button>
            <button onClick={() => decideCandidate(id,candidate.id,false)}>Reprovar</button>
        </div>
    })

    const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((c) => {
        return <li key={c.id}>{c.name}</li>
    })


    return (
        <div>
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>

            <div>
                {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
                {tripDetails && tripDetails.trip && <div>
                    <p><b>Nome:</b> {tripDetails.trip.name}</p>
                    <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                    <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                    <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                    <p><b>Data:</b> {tripDetails.trip.date}</p>
                </div>}
            </div>

            <h2>Candidatos Pendentes</h2>
            <li>
                {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}
            </li>

            <h2>Candidatos Aprovados</h2>
            <li>
                {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
            </li>
        </div>
    )
}

export default TripDetailsPage
