import axios from "axios"
import { goToAdminHomePage } from './Coordinator'

export const login = (body, navigate) => {
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
}

export const sendApplication = (body, tripId, clear) => {
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trips/${tripId}/apply`, body)
        .then(() => {
            alert(" Inscrição feita con sucesso")
            clear()
        })
        .catch((err) => alert(err.response.message))
}

export const createTrip = (body, clear) => {
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trips`, body, {

            headers: { auth: localStorage.getItem("token") }
        })
        .then(() => {
            alert("Viagem adicionada com sucesso!")
            clear()
        })
        .catch((err) => alert(err.response.data.message))
}

export const deleteTrip = (id) => {
    axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/trips/${id}`, {
            headers: { auth: localStorage.getItem("token") }
        })
        .then(() => {
            alert("Viagem deletada com sucesso!")
        })
        .catch((err) => alert(err.response.data.message))
}
