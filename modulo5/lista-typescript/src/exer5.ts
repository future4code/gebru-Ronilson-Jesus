enum PERMISSAO {
    ADMIN = "admin",
    USER = "user"
  }
  
  type user = {
    name: string
    email: string
    permissao: PERMISSAO
  };
  
  const usersList: user[] = [
    { name: "Rogério", email: "roger@email.com", permissao: PERMISSAO.USER },
    { name: "Ademir", email: "ademir@email.com", permissao: PERMISSAO.ADMIN },
    { name: "Aline", email: "aline@email.com", permissao: PERMISSAO.USER },
    { name: "Jéssica", email: "jessica@email.com", permissao: PERMISSAO.USER },
    { name: "Adilson", email: "adilson@email.com", permissao: PERMISSAO.USER },
    { name: "Carina", email: "carina@email.com", permissao: PERMISSAO.ADMIN }
  ];
  
  const usuarios = (list: user[]): string[] => {
    const emailsList: string[] = list.filter((user) => user.permissao === PERMISSAO.ADMIN).map((user) => user.email)
    return emailsList
  }