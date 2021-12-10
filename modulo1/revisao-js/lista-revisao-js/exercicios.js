// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
     return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=> a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let numeroPar = []
   for (i =0; i < array.length; i++){
      const numeroMaior = array[i]
      if (numeroMaior %2=== 0){
         numeroPar.push(numeroMaior)
      }
   }return numeroPar 
  
} 


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let numeroParelevado = []
   for (i =0; i < array.length; i++){
      const numeroMaior = array[i]
      if (numeroMaior %2=== 0){
         numeroParelevado.push(numeroMaior * numeroMaior)
      }
   }return numeroParelevado 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maiorNumero = []
   for (i =0; i < array.length; i++){
      const numeroMaior = array[i]
      if (numeroMaior > maiorNumero){
         maiorNumero = numeroMaior
      }
   }return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maior = Math.max(num1,num2)
   let menor = Math.min(num1,num2)
   let objeto
 if (maior % menor === 0){
    objeto = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: true,
      diferenca: maior - menor
   }   
 }else {
   objeto = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: false,
     diferenca: maior - menor
 }
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const numeroPar = []
   for (let num = 0; numeroPar.length < n; num++ ){
      if (num %2 === 0 ){
         numeroPar.push(num)
      }
   }return numeroPar
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA === ladoB && ladoB === ladoC){
      return "Equilátero"
   }
   else if (ladoA === ladoC || ladoB  === ladoA || ladoB  === ladoC ){
      return "Isósceles"
   }
   else {
     return "Escaleno"
   }
   
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
filme.atores = ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    filme = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)    
    return filme
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima={ ...pessoa, nome: "ANÔNIMO" } 
   return pessoaAnonima
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter(pessoa =>(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)) 
     return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter(pessoa =>(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60))
         return pessoasAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   for (obj of contas) {
       for (compra of obj.compras) { obj.saldoTotal = obj.saldoTotal - compra } obj.compras = []
 } return contas


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
}