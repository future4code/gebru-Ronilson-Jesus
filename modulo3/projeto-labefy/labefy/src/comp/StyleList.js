import styled from "styled-components"
import Imagem from "./img/sound.jpg"

export const Lista = styled.div`
display: flex;
align-items: center;
justify-content: space-between ;
border-radius: 10px 25px ;
padding: 10px;
margin: 2px;
width: 450px;
color: #bbf1e9;
background-color: #323532;
@media (max-width: 375px) {
    width: 50vh;
  }
`

export const PlayerMusic = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: 1px solid black;
padding: 20px;
margin: 5px;
width: 300px;
background-image: url(${Imagem});
height: 30vh ;
color: #ddd;
`

export const Main = styled.div`
display: flex ;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`

export const H2 = styled.h2`
margin-top: 5px;
@media (min-width: 375px) {
    font-weight: 100;
  }
`