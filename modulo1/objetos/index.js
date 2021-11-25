
// //---------Exercício de interpretação de código---------

// // 1 - Leia o código abaixo.
// //a)

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //R = aqui o console vai mostrar o nome de primeiro ator do array "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1])// R = aqui eu não entendi 
// console.log(filme.transmissoesHoje[2]) // R = aqui vai mostrar os locais de transmissão
// // do array trasnmissoesHoje na posição 2 canal: 'Globo', horario: '14h'


// //2 - Leia o código abaixo.

//a) R= no console vão imprimir os nomes, idades e raças de cada pet com alterações mudando o nome dos animais 
//b) R= serve para fazer uma copia de um objeto 


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


//3° - 

// a) O que vai ser impresso no console?
// R = em "backender" vai imprimir "false", já em "altura" "undefined" 

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// R = em "backender" vai imprimir "false" o valor que ela possui,
// já em "altura" vai imprimir "undefined" pois ela não possui valor

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))



// ------Exercícios de escrita -------

//1 - a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).

// const pessoa = {
//     nome: "Pica pau", 
//     apelidos: ["Maluco", "Doido", "Pirado"]
//  }
 
//  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

//  //b)

//  const pessoa2 = {...pessoa, apelidos: ["Gênio", "Soberano", "Transcedente"]}



//  //2 - a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const pessoa = {
// 	nome: "Bruno", 
//   idade: 23, 
// 	profissao: "Instrutor"
// }

// const pessoa2 = {
// 	nome: "Rafa", 
//   idade: 22, 
// 	profissao: "Cantor"
// }


//   b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:


//  function mode (pessoa,pessoa2) {
   
//    return [[`${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}`],
//     [`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`]]}


// console.log (mode(pessoa,pessoa2))


//3 - a)

// const carrinho = []

// const sacolao = {
//  nome: 'Melancia',
//  disponibilidade: true
// }

// const sacola = {
//  nome: 'Goiaba',
//  disponibilidade: true
//  }

//  const saco = {
//   nome: 'Manga',
//   disponibilidade: true
//   }

// function mercado (lista){

//   carrinho.push(lista)
// }

// mercado(sacolao)
// mercado(sacola)
// mercado(saco)
// console.log(carrinho)