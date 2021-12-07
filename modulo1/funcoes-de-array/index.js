// Exercícios de interpretação de código
// 1 - Leia o código abaixo
// a) O que vai ser impresso no console? 
// R = ele vai copiar o array usuario e vai falar a posição de cada array

//---------------------------------------------------------
//2 - a) O que vai ser impresso no console? R = vai imprimir somente o nome de cada pessoa no array

//---------------------------------------------------------
//3 - a) O que vai ser impresso no console? R = vai imprimir somente os nomes que são diferentes de  "Chijo"



//--------------------------------------------------
//    execicio 1 - Exercícios de escrita de código
//--------------------------------------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 const buscarNomesPet =(pet) => {
   return pet.nome
 }
 const nomePet = pets.map(buscarNomesPet)
 
 //-----------------------------------------------------------
 // b) Crie um novo array apenas com os cachorros salsicha
 
 const procurarSalsicha =(racaSalshi) => {
   return racaSalshi.raca ==="Salsicha"
 }
 const nomeSalshi = pets.filter(procurarSalsicha)
 
 //---------------------------------------------------------
 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
 
 const procurarPoodle =(racaPoodle) => {
   return racaPoodle.raca ==="Poodle"
 }
 const nomePoodle = pets.filter(procurarPoodle)
 
 const descontoCliente = (desconto)=> {
   return desconto.nome
 }
 const nome = nomePoodle.map(descontoCliente)
 const aaa = nome.map((bb)=> {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${bb}!`
 })
 
 //--------------------------------------------------
 // 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo...
 
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 //a) Crie um novo array que contenha apenas o nome de cada item
 
 const nomeItem = produtos.map((produto)=> {
   return produto.nome
 })
 
 //-----------------------------------------------------------
 
 // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 
 const descontoProduto = produtos.map((desconto) =>{
 const des =  desconto.preco *5 / 100
   const des1 = desconto.preco - des
 
 return `${desconto.nome} ${des1.toFixed([2])}`
 })
 
 //----------------------------------------------------------
 // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 
 const itemBebidas = produtos.filter((bebidas)=> {
   return bebidas.categoria === "Bebidas"
 })
 
 //----------------------------------------------------
 // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê
 
 const itemYpe = produtos.filter((ype)=>{
 const aaa = ype.nome
 return aaa.includes("Ypê")
 })
 
 //-----------------------------------------------------
 // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
 
 const aa = itemYpe.map((nomeYpe)=>{
   return `Compre ${nomeYpe.nome} por ${nomeYpe.preco}`
 })
 