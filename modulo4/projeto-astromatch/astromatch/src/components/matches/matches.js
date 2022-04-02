import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components';

const Img = styled.img`
height: 50px;
width: 50px;
margin: 10px 10px 10px 10px;
border-radius: 50%;
`

function Matches() {
    const [matches, setMatches] = useState([])

    const getMacthes = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronilson-souza-gebru/matches")
            .then(response => {
                setMatches(response.data.matches)
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getMacthes()
    }, [])

    const myMatches = matches.map((person) => {
        return (
            <div key={person.name}>
                <Img src={person.photo} />
                <p><b> {person.name} </b></p >
            </div>
        )
    })

    return (
        <div className="centro">
            <div className="perfil">
                <div className="lista">
                    {myMatches}
                </div>
            </div>
        </div>
    )
}
export default Matches