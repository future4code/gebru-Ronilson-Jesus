export type Extrato = {
    valor: number,
    data: Date,
    descricao: string
}

export type User = {
    nome:string,
    cpf: string,
    dataNascimento: Date,
    saldo: number,
    extrato: Extrato[]
}

export let users: User[] =[]