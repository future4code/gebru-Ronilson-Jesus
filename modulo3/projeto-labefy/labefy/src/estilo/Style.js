import styled from "styled-components"

export const MeuEstilo = styled.div`
 display: flex;
 flex-direction: column ;
 align-items: center ;
 justify-content: space-around ;
 background-image: 
 linear-gradient(to top,#79e376de,#ffffff);
`
export const Header = styled.h1`
 display: flex;
 flex-direction: column ;
 align-items: center;
 justify-content: space-around ;
 padding: 30px;
 background-image: linear-gradient(to bottom,#76e3d3,#ffffff);
`

export const Button = styled.button`
    padding: 4px;
    margin-top: 21px;
    height: 30px;
    width: 100px;
    &:hover{
    cursor: pointer;
    background-color: lightblue;
}
`
    
