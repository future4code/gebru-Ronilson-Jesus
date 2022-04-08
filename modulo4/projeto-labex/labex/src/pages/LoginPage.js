import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import useForm from '../hooks/useForm'
import { login } from '../routes/request'

const LoginPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })
    
    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, navigate)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    name={"email"}
                    placeholder={"E-mail"}
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    name={"password"}
                    placeholder={"Senha"}
                    type={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <div>
                    <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
