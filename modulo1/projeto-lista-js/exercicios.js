// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number (prompt ("Digite a altura do retangulo"))
  const largura = Number (prompt ("digie a largura do retangulo"))
  let calculaAreaRetangulo = altura * largura
  console.log (calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt ("Digite ano que estamos"))
  const anoNascimento = Number (prompt ("digie seu ano de nascimento"))
  let imprimeIdade = anoAtual -  anoNascimento
  console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura)
  
  console.log (IMC.toFixed(1))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("seu nome")
  const idade = prompt("sua idade ")
  const email = prompt("seu email")
  
  imprimeInformacoesUsuario = "Meu nome é "+nome+", tenho "+idade+" anos,"+" e o meu email é "+email+"."
  console.log (imprimeInformacoesUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let arrayCores = []
  arrayCores.push (prompt ("Primeira cor"))
   arrayCores.push (prompt ("Segunda cor"))
   arrayCores.push (prompt ("Terceira cor"))

  console.log (arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string =prompt("texto")

  const mm = string.toUpperCase()
  console.log (mm)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let calculaIngressosEspetaculo = custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const string1 =prompt("texto")
  const string2 =prompt("texto")
  
  const mm = string1.length
  const mm1 = string2.length
  const mm3 = mm===mm1
  console.log (mm3)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string1 =prompt("texto")
  const string2 =prompt("texto")
  
  const mm = string1.toUpperCase()
  const mm1 = string2.toUpperCase()
  const mm3 = mm===mm1
  console.log (mm3)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual=Number (prompt("Digite o ano atual"))
  const anoNasci=Number (prompt("Digite o ano de nascimento"))
  const anoIdentidade=Number (prompt("Digite o ano da identidade"))
  
  let idade = anoAtual - anoNasci
  let dataIdentidade = anoAtual - anoIdentidade
  
  function soma(){
  
  let mm = idade <= 20 && dataIdentidade >=5 
  
  console.log ("Sua idade é ", idade, " e sua identidade tem", dataIdentidade," anos.",mm)
  
   mm = idade > 20 && idade <=50 && dataIdentidade >=10 
  
  console.log ("Sua idade é ", idade, " e sua identidade tem", dataIdentidade," anos.",mm)
  
  
   mm = idade >50 && dataIdentidade >=15 
  console.log ("Sua idade é ", idade, " e sua identidade tem", dataIdentidade," anos.",mm)
  
  }
  
  soma()
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}