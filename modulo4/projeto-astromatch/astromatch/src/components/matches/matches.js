import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components';

const Img = styled.img `
height: 50px;
width: 50px;
margin: 10px 10px 10px 10px;
border-radius: 50%;
`

export default function Matches(props) {
    const [matches, setMatches] = useState([])
    const [teste, setTeste] = useState(true)


    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/matches")
            .then(response => {
                setMatches(response.data.matches)
                setTeste(!teste)
            })
            .catch(err => {
                console.log(err);
            });
    }, [teste])



    const myMatches = matches.map((profile) => {
        return < >
            < Img src = { profile.photo }
        /> <p> < b > { profile.name } </b></p >
            </>
    }) 

    return (

        <div className="centro">
            <div className="perfil">
                <div className="lista">           
                   
                   { myMatches }
                  
                </div>               
            </div>
        </div>
    )
}