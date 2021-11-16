
//     Exercícios de interpretação de código

//1° - Leia o código abaixo. Indique todas as mensagens impressas no console.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)    R= aqui o resultado será "False"

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)    R= aqui o resultado será "False"

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)    R= aqui o resultado será "False"

// console.log("d. ", typeof resultado) R= aqui o typeof será "boolean"


//2° - Seu colega se aproxima de você falando que o código dele não funciona como devia.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)  R= A soma não está funcionando porque os valores estão em string e tem que ser transformadas em number



//3° Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja...

// R=
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


//     Exercícios de escrita de código

//1° - Faça um programa que:

const idade = Number (prompt ("Qual a sua idade?"))
const idadeAmigo = Number (prompt ("Qual a idade do seu(a) melhor amigo(a)?"))

console.log ("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)


//2° - Faça um programa que:

const numeroPar = Number (prompt ("Insira um número par"))
let resto = numeroPar % 2

console.log ("o resto da divisão é", resto) 
// R= caso o usuário insira um numero Par, o resto sempre será 0
// R= caso o usuário insira um numero Ímpar, p resto sempre será 1


//3° - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 


const idade2 = Number (prompt ("Qual a sua idade?"))

let idadeMeses = idade2 * 12
let idadeDias = idade2 * 365
let idadeHoras = idade2 * 8760

console.log ("Sua idade em Meses são,", idadeMeses)
console.log ("Sua idade em dias são,", idadeDias)
console.log ("Sua idade em horas são,", idadeHoras)


//4° - Faça um programa que pergunte ao usuário dois números...


const numerosAleatorios1 = Number (prompt ("insira um número!"))
const numerosAleatorios2 = Number (prompt ("insira outro número!"))
let divisao = numerosAleatorios1 / numerosAleatorios2 
let divisao2 = numerosAleatorios2 / numerosAleatorios1
divisao = numerosAleatorios1 % numerosAleatorios2
divisao2 = numerosAleatorios2 % numerosAleatorios1


console.log ("O primeiro numero é maior que segundo?", numerosAleatorios1 > numerosAleatorios2)
console.log ("O primeiro numero é igual ao segundo??", numerosAleatorios1 === numerosAleatorios2)
console.log ("O primeiro numero é divisível pelo segundo?", divisao === 0)
console.log ("O segundo numero é divisível pelo primeiro?", divisao2 === 0)
