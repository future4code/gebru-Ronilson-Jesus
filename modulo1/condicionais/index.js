// 1) Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
//}

//a) Explique o que o código faz. Qual o teste que ele realiza?
//R = Retorna o resto da divisão em números inteiros, se o resto for igual a 0 passa no teste

//b) Para que tipos de números ele imprime no console "Passou no teste"?
// R= para todos os numeros Pares

//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//R = Para todos os numeros Impares


//  2)
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima? R = para verificar os precos das frutas

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? R = preco = 2.25

//c) Considere que um usuário queira comprar uma Pêra...? R= se o break for removido ele vai parar no default e imprimindo o valor de 5


//  3)

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo? R = está pedindo ao usuario que digite um numero que vai estar em string e o transformando em um numero

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? R = se o numero for 10 a mensagem "Esse número passou no teste" e se o numero for -10 eu não faço ideia do que vai acontecer

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R = eu acho que vai ter um erro na variavel "let" mas não sei o que pode aontecer.



//-------Exercícios de interpretação de código---------

//  1 )Faça um programa que pergunta ao usuário qual a idade dele e imprima...
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
 
//  const idadeUsuario =Number (prompt ("Qual a sua idade? "))

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//  if (idadeUsuario>=18){
//    console.log("Você pode dirigir.")
//  }else {
//    console.log ("Você não pode dirigir.") 
//  }


//  2) Agora faça um programa que verifica que turno do dia um aluno estuda...

// const verificarTurno = prompt ("Em que turno você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno). ")

// if (verificarTurno === "M"){
//   console.log("Bom dia!")
// }
// else if (verificarTurno === V){
//   console.log("Boa tarde!")
// }
// else {
//   console.log("Boa noite!")
// }

//  3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const verificarTurno = prompt ("Em que turno você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno). ")

// switch (verificarTurno){

//   case "M":
//   console.log("Bom dia!")

//   break
//   case "V":
//   console.log("Boa tarde!")
  
//   break
//   case "N":
//   console.log("Boa noite!")
//   break 
// }

// 4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme...

// const generoDoFilme = prompt ("Qual o gênero de filme que vão assistir? ")
// const precoDoIngresso =Number (prompt ("Qual o valor do ingresso? "))

// if (generoDoFilme === "fantasia" && precoDoIngresso < 15){
// console.log ("Bom filme!")
// } else {
//   console.log("Escolha outro filme :(")
// }


//----- DESAFIOS ----- 

//  1

// const generoDoFilme = prompt ("Qual o gênero de filme que vão assistir? ")
// const precoDoIngresso =Number (prompt ("Qual o valor do ingresso? "))
// const lanche = prompt ("Qual o lanche que você vai querer? ")

// if (generoDoFilme === "fantasia" && precoDoIngresso < 15){
// console.log (`Bom filme! Aproveite o seu ${lanche}`)
// } else {
//   console.log("Escolha outro filme :(")