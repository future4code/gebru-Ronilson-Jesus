//   a)
// let minhaString: string = "Lindo"
// minhaString = 2

//Um numero não pode ser atribuído a uma variavel do tipo 'string'.


//   b)
//  let meuNumero: number | string 

// R - Criando uma variavel do tipo "Union".

//  c)
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// } 

// const pessoa1: pessoa = {
//     nome: "Ronilson",
//     idade: 27,
//     corFavorita: "Vermelho"
// }

// const pessoa2: pessoa = {
//     nome: "Roni",
//     idade: 20,
//     corFavorita: "Preto"
// }


//  d)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoires.AMARELA
} 

enum coresArcoires {
   VERMELHA = "vermelha", 
   LARANJA = "laranja",
   AMARELA = "amarela",
   VERDE = "verde",
   AZUL = "azul", 
   VIOLETA = "violeta"
}
