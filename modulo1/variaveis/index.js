
//1° - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

//R = na primeira opção o console vai imprimir (10) e na segunda opção (10 5).

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

//2° - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

//R = Vai imprimir (10 10)

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)


//3° - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis...

//R = variaveis 

// let horaDia = prompt("Quantas horas você trabalha por dia?")
// let salarioDiaria = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)


//Exercícios de escrita de código
//  1°

let nome
let idade

console.log (typeof nome, typeof idade)

// Falta de valor em uma variavel, por isso que está imprimindo "Undefined"

nome = prompt ("Qual o seu nome?")
idade = prompt ("Qual a sua idade?")

console.log (typeof nome, typeof idade)

// Agora as variaveis possuem valores por isso está mostrando o tipo de variavel.

console.log ("Olá", nome, "você tem", idade, "anos")


//2° - Escreva um programa que faça 3 perguntas...

const correr =  prompt ("Você gosta de correr?")
const nadar =  prompt ("Você gosta de nadar?")
const peixe =  prompt ("Você gosta de peixe?")

console.log ("Você gosta de correr? R=", correr)
console.log ("Você gosta de nadar? R=", nadar)
console.log ("Você gosta de peixe? R=", peixe)

//3° - Suponha que temos duas variáveis a e b, cada uma com um valor inicial.

let a = prompt ("Insira um número")
let b = prompt ("Insira um número novamente")
let c

// Lógica para trocar os valores

c = a
a = b
b = c

// Resultado:

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// não estou entendendo o motivo de não funcionar