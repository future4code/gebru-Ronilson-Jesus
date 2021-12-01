
//     Exercícios de interpretação de código   

// 1) 

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// R = A variavel "valor" está sendo somada com a variavel "i" o "i" vai sempre adicionando e somando um numero por vez



//2) 

//a)  R = O console vai mostrar todos os numemos maiores de 18
// b) R = Sim. Mostrando no console.log(lista)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }
  

// 3) R = vai adicionar estrelinhas dependendo da quantidade de numeros e vai ser 4 estrelinhas na ultima linha

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


//         Exercícios de escrita de código


// 1) 
// const bichinhoDeEstimacao = Number (prompt("Quantos animais de estimação você tem? "))

// const meusPets = []

//   if (bichinhoDeEstimacao !== 0){

//     for(let animal = 0; animal < bichinhoDeEstimacao; animal++){ 

// const nomeAnimal = prompt("Digite o nome do(s) seu(s) pet(s): ")
// meusPets.push(nomeAnimal)


// }
// console.log ("Estes são os seus pets ",meusPets)
//   }

// else {
//   console.log ("Que pena! Você pode adotar um pet!")
// } 


// 2)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArrayPar= []

//a)

// function imprimirArray (array){
 
// console.log(array)
// }


// imprimirArray(arrayOriginal)


// b)


// function divisao(divisaoArray){

// for (let i = 0; i < arrayOriginal.length ; i++){

// let divisaoArray = arrayOriginal[i] / 10
 
//   console.log(divisaoArray)
// }
// }divisao(arrayOriginal)




// function numerosPares (pares) {

// for (let i = 0; i < pares.length; i++) {

//     if ((pares[i] % 2) == 0) {
//   novoArrayPar.push = pares[i] 
//       console.log(novoArrayPar)  
//     }
//    }
// }

// numerosPares(arrayOriginal)

// function string(){
// for(let i = 0; i < arrayOriginal.length; i++){ 
// const novoString =[]

//   novoString.push("O elemento do índex " + i + " é: " + arrayOriginal[i])

//   console.log(novoString)
// }
// }
// string(arrayOriginal)



// function maiormenor(){
// let maiorNumero =0

// for (let i = 0; i < arrayOriginal.length; i++){

//  const numero = arrayOriginal[i]
//   if (numero > maiorNumero) {
//     maiorNumero = numero
// }
// }
// console.log(maiorNumero)
// }

// maiormenor(arrayOriginal)




