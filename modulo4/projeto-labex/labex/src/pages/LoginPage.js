import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAdminHomePage } from '../routes/Coordinator'

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder={"E-mail"}
                type={"email"}
                name={"email"}
            />
            <input
                placeholder={"Senha"}
                type={"password"}
                name={"password"}
            />
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
            </div>
        </div>
    )
}

export default LoginPage
