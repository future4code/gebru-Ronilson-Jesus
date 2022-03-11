import styled from "styled-components"

export const Lista = styled.div`
display: flex;
align-items: center;
justify-content: space-around ;
border: solid black;
padding: 10px;
margin: 5px;
width: 300px;
&:hover{
    cursor: pointer;
    background-color: lightblue;
}
`

export const PlayerMusic = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: solid black;
padding: 10px;
margin: 5px;
width: 300px;
background-color: #333;
height: 30vh ;
color: #ddd;
`

export const Main = styled.div`
display: flex ;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`