import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from "./img/ronilson.jpeg";
import FotoEmail from "./img/email.jpg"
import FotoLocaliza from "./img/localiza.png"
import FotoEstudando from "./img/estudando.png"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Ronilson Souza" 
          descricao="Oi, eu sou o Ronilson. Sou um dos alunos da Labenu. Adoro quando meus codigos rodam certinhos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem= {FotoEmail} 
          nome= "E-mail:"
          descricao="Ronillson-10@hotmail.com." 
        />
        
        <CardPequeno 
          imagem= {FotoLocaliza}
          nome= "Localização: "
          descricao="Aqui em casa." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoEstudando} 
          nome="Labenu" 
          descricao="Estudante dev full stack.!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
