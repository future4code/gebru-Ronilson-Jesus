/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      
      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      let somaUsuario  = cartaUsuario1.valor + cartaUsuario2.valor

      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()
      let somaComputador   = cartaComputador1.valor + cartaComputador2.valor

      if (confirm(`Suas cartas são : ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto} \n Deseja comprar mais uma carta?`)){
      let carta = comprarCarta()
      somaUsuario = somaUsuario + carta.valor

           if (somaUsuario <= 20){
            somaComputador = somaComputador + carta.valor
              if (confirm(`Suas cartas são : ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${carta.texto}. A carta revelada do computador é ${cartaComputador1.texto} \n Deseja comprar mais uma carta?`)){
               somaUsuario = somaUsuario + carta.valor
                if (somaUsuario <= 20){
                  if (confirm(`Suas cartas são : ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${carta.texto} ${carta.texto}. A carta revelada do computador é ${cartaComputador1.texto} \n Deseja comprar mais uma carta?`)){}
                   if (somaUsuario <= 20){
                     if (confirm(`Suas cartas são : ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${carta.texto} ${carta.texto}. A carta revelada do computador é ${cartaComputador1.texto} \n Deseja comprar mais uma carta?`)){}
         
           }
         }
      }
   }
}
}
   
   else {
      console.log(alert("O jogo acabou"))
   }