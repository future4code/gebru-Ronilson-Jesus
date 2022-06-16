import express, { Request, Response } from "express"
import cors from "cors"
import { USER_TYPE, users } from "./data"
import { send } from "process"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor disponível"))

app.get('/users', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        res.status(200).send(users)

    } catch (error) {
        res.status(500)
    }
})

app.get('/user/type', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        let type = req.query.type as string

        if (!type){
            errorCode = 422 
            throw new Error("Falta o parâmetro de busca!")
        }

        const user = users.filter(u => u.type.toLowerCase() === type.toLowerCase())

        if (type != USER_TYPE.NORMAL.toLowerCase() && type != USER_TYPE.ADMIN.toLowerCase()) {
            errorCode = 422
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
          }

        if (!type.length){
            errorCode = 404
            throw new Error("Type não encontrado.")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }


})

app.get('/user/name', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        let name = req.query.name as string

        if (!name){
            errorCode = 422 
            throw new Error("Nome de usuario não encontrado!")
        }

        const user = users.filter(u => u.name.toLowerCase() === name.toLowerCase())

        if (!name.length){
            errorCode = 404
            throw new Error("name não encontrado.")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})