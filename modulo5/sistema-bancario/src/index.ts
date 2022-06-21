import { User, users } from './data';
import express, {Request, Response } from "express";
import { AddressInfo } from "net";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors())


app.post('/users/create',  (req:Request, res:Response )=>{
 let errorCode = 500 
try {
  
  const {nome, cpf, dataNascimentoString} = req.body

  const [dia, mes, ano] = dataNascimentoString.split("/")

  const dataNascimento:Date = new Date(`${ano}-${mes}-${dia}`)

  const subidade:number = new Date().getTime() - dataNascimento.getTime()

  const idade:number = subidade / 1000 / 60 / 60 / 24 / 365

  if (idade < 18 ){
    errorCode = 404
    throw new Error ("idade tem que ser maior de 18 anos.")
  }

  const newUser :User = {
    nome,
    cpf,
    dataNascimento,
    saldo:0,
    extrato: []
  }

  users.push(newUser)

  res.status(201).send(users)
  
} catch (error: any) {
  res.status(errorCode).send(error.message)
}
})

app.get('/users', (req:Request, res:Response)=>{
let errorCode = 500
  try {

    if(!users.length){
      errorCode = 404
      throw new Error ("Sem usúario")
    }

    res.status(201).send(users)
  } catch (error: any) {
res.status(errorCode).send(error.message)
    
  }
})









const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor está em http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;