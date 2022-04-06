import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAdminHomePage } from '../routes/Coordinator'
import axios from 'axios'
import useProtectedPage from '../hooks/useProtectedPage'

const LoginPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        const URL =  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru/login";
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(URL, body)
          .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate);
          })
          .catch((err) => {
            console.log("ERRO:", err.response)
          })
      }

    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder={"E-mail"}
                type={"email"}
                name={"email"}
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder={"Senha"}
                type={"password"}
                name={"password"}
                value={password}
                onChange={onChangePassword}
            />
            <div>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => onSubmitLogin()}>Entrar</button>
            </div>
        </div>
    )
}

export default LoginPage
