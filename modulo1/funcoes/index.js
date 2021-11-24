
//-------Exercícios de interpretação de código------

//1° - 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)
// a)  O que vai ser impresso no console? 
//R = o resultado da multiplicação (10 e 50)

//b) O que aconteceria se retirasse os dois console.log...?
// R = a multiplicação seria feita mas não iria mostrar no console


//2° - Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//R = essa função vai deixar todas as letras minuscula e fazer a busca pela palavra "cenoura"

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

// I. True
// II. True
// III.True      obs: não sei se era isso mesmo que estão pedindo.


//---------  Exercicio de escrita de codigo  -----------


// 1° - A função não deve receber nenhum parâmetro e deve imprimir uma mensagem
// falando algumas informações sobre você, como:

// a)  A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 

//     function eumesmo(){

//   console.log ("Eu sou Ronilson, tenho 26 anos, moro em Camaçari e sou estudante.")

// }

// eumesmo()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 

//    function informações (nome, idade, endereço, profi){
       
//     console.log ("Eu sou ", nome," tenho ",idade," anos"," moro em ",endereço," e sou ", profi)

//    }

// const nome1 = prompt ("Digite seu nome")
// const idade1 = prompt ("Digite sua idade")
// const endereço = prompt ("Digite seu endereço")
// const profi1 = prompt ("Digite seu profissão")

// informações(nome1,idade1,endereço,profi1)

//2° - Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function soma(numero1, numero2){
// const resultado= numero1 + numero2
// console.log (resultado)
// }
// const numero1 =5
// const numero2 = 9
// soma (numero1, numero2)


//b)  Faça uma função que recebe 2 números e 
//retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function numeros (soma1, soma2){

//     const comparar = soma1 >= soma2
//     console.log (comparar)
//     }
    
//     let nume1 = 2
//     let nume2 = 3
    
//     numeros(nume1,nume2)

// c) c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
 
// function verificar(numero){

//     console.log(numero % 2 === 0)
//     }

//     const par=Number (prompt("digite um numero"))

//   verificar(par)

////d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function seila(transformar){

//     console.log (transformar.toUpperCase())
//     console.log (transformar.length)
    
//     }
    
//     const bola = prompt("digite")
//     seila(bola)


//3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).

// const somar1=Number (prompt("Digite um numero"))
// const somar2=Number (prompt("Digite outro numero"))

// function soma(somar1, somar2){

// let resultadoSoma = somar1 + somar2
// console.log ("SOMA ",resultadoSoma)
//  resultadoSoma = somar1 - somar2
// console.log ("SUBTRAÇÃO ",resultadoSoma)
// resultadoSoma = somar1 * somar2
// console.log ("MULTIPLICAÇÃO ",resultadoSoma)
// resultadoSoma = somar1 / somar2
// console.log ("DIVISÃO",resultadoSoma)

// }

// soma(somar1,somar2)

