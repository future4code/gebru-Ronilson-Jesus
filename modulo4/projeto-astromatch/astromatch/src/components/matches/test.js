import React, { useEffect, useState } from "react"
import axios from "axios"

const headers = 'Content-Type: application/json'

export default function Test() {

    const [listPerson, setListPerson] = useState({})
    const [teste, setTeste] = useState(true)

   
    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronilson-souza-gebru/person")
            .then(response => {
                setListPerson(response.data.profile)
            })
            .catch(err => {
                alert(err)
            })
    }, [teste])

    const like = (id) => {
        const body = {
            id: id,
            choice: true
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/choose-person", body, headers)
            .then(() => {             
                setTeste(!teste)
            })
            .catch(err => {
                alert(err)
            });
    }

    const dislike = (id) => {
        const body = {
            id: id,
            choice: false
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/choose-person", body, headers)
            .then(() => {
                setTeste(!teste)
            })
            .catch(err => {
                alert(err)
            });
    }

    return (
        <div className="centro">
            <div className="perfil">
                <div className="foto" style={{ backgroundImage: `url(${listPerson.photo})` }}>
                    <div className="fotoComTexto">
                        <div className="nomeIdade">
                            <h2>{listPerson.name}, </h2>
                            <h2>{listPerson.age}</h2>
                        </div>
                        <div className="bio">
                            {listPerson.bio}
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="action">
                        <button onClick={() => dislike(listPerson.id)}>❌</button>
                        <button onClick={() => like(listPerson.id)}>❤️‍🔥</button>
                    </div>
                </div>
            </div>
        </div>
    )
}