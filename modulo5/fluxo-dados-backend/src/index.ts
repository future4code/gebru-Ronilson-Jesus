import express, { Request, Response } from "express"
import cors from "cors"
import { Product, products } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor disponível"))

app.get("/test", (req, res) => {
  res.send("API está funcionando!")
})

app.post("/products", (req: Request, res: Response) => {
  let errorCode = 500

  try {
    const { name, price } = req.body

    if (!name || !price) {
      errorCode = 422
      throw new Error("Campos faltando: 'name', 'price'")
    }

    if (typeof name !== "string") {
      errorCode = 412
      throw new Error("O 'name' tem que ser uma string")
    }

    if (typeof price !== "number" || price <= 0) {
      errorCode = 412
      throw new Error(" O 'price' tem que ser um número!")
    }

    const newProduct: Product = {
      id: products.length + "1",
      name,
      price
    }

    products.push(newProduct)

    res.send(products)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})


app.get("/products", (req: Request, res: Response) => {
  let errorCode = 500
  try {
    errorCode = 200
    res.send(products)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})


app.put("/products/:id", (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const id = req.params.id
    const newPrice = req.body.price

    if (!newPrice && newPrice !== 0) {
      errorCode = 422
      throw new Error("Falta o parâmetro 'price'")
    }

    if (typeof newPrice !== "number" || newPrice <= 0) {
      errorCode = 422
      throw new Error("O params 'price' deve ser um número e maior que zero")
    }

    let FoundProduct = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].price = newPrice
        FoundProduct = true
      }
    }

    if (!FoundProduct) {
      errorCode = 404
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})


app.delete("/products/:id", (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const id = req.params.id
    let FoundProduct = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        FoundProduct = true
      }
    }

    if (!FoundProduct) {
      errorCode = 404
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})