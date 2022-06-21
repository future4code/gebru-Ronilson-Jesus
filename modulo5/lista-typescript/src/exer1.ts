const pessoa = (nome: string, dataNascimento: string): string => {
    const dia = dataNascimento.split("/");
    const mes = dataNascimento.split("/");
    const ano = dataNascimento.split("/");
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return frase;
  }