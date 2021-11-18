
// 1 - indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
// R = aqui vai mostrar a no console "a. undefined" pois a variavel array não foi preenchida


array = null
console.log('b. ', array)
// R = aqui vai mostrar a no console "a. null" pois a variavel array foi definida como NULL


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// R = aqui vai mostrar a no console "c. 11" pois a função .length faz a contagem da quantidade que tem um array


let i = 0
console.log('d. ', array[i])
// R = aqui vai mostrar a no console "c. 3" pois a variavel i foi definida como 0 
//e foi buscar a posição 0 no array que é o numero 3


array[i+1] = 19
console.log('e. ', array)
// R = aqui o array foi selecionou a posição de numero 1 e alterando o numero dessa posição para o numero 19
// mostrando os seguintes valores [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


const valor = array[i+6]
console.log('f. ', valor)
//R = aqui a variavel recebe a pocição de numero 7 no array (i=1 e 1+6 = 7) 
//e logo em seguida i console mostra o numero da variavel no array que é 9


//2° - Leia o código abaixo com atenção 
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// R = o console vai mostrar o seguinte "SUBI NUM ÔNIBUS EM MIRROCOS 27"
// a variavel foi alterada para maiuscula com a função .toUpperCase() 
//e logo em seguida a letra "A" foi substituida pela letra "I" por causa da função .replaceAll
// e a função .length fez a contagem das letras na frase somando um total de 27


//        Exercícios de escrita de código

// 1° - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
// Imprima no console a seguinte mensagem:

// const email = prompt ("Digite seu e-mail")
// const nome  = prompt ("Digite seu nome")

// console.log ("O e-mail "+ email +" foi cadastrado com sucesso. Seja bem-vinda(o), "+ nome+"!")


// 2° - Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:

// const arraycomida = ["pizza", "Coxinha","carne","frango","lasanha"]

// // a) Imprima no console o array completo

// console.log (arraycomida)

// // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// console.log (arraycomida[0])
// console.log (arraycomida[1])
// console.log (arraycomida[2])
// console.log (arraycomida[3])
// console.log (arraycomida[4])

// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// const comidaUsuario = prompt ("Digite sua comida favorita")
// arraycomida [1] = comidaUsuario
// console.log (arraycomida)


//3° - Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

 const tarefa1 = prompt ("1° Tarefa do dia")
 listaDeTarefas [0] = tarefa1
 const tarefa2 = prompt ("2° Tarefa do dia")
 listaDeTarefas [1] = tarefa2
 const tarefa3 = prompt ("3° Tarefa do dia")
 listaDeTarefas [2] = tarefa3

// c) Imprima o array no console

console.log (listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const escolhaNumero = prompt ("Digite um numero de 0 a 2 para a sua tarefa")

// e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(escolhaNumero)

// f) Imprima o array no console
console.log (listaDeTarefas)