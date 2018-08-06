import React from 'react';

//Icones
import { EmailIcon, FacebookBoxIcon, InstagramIcon } from 'mdi-react';

//Imagens
import comMulheres from '../image/nossoGrupo/comMulheres.png';
import pc          from '../image/nossoGrupo/pc-preto.png';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Grupo = () => (
  <div id="grupo">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5 paddingRight">
          <p className="titulo">Nosso grupo</p>
          <p className="texto">
            Tudo começou em um dia que três meninas da área de computação se juntaram e começaram a conversar sobre a realidade que vivenciavam. Elas se perguntavam: Por que somos poucas? Por que nossa área é por maioria homem?
            <br/>
            Assim, surgiu o “Computação com Mulheres”, um grupo que sonha em ter cada vez mais mulheres ocupando postos que alguns intitulam ser de homens. Mas, sem a necessidade de exclusão dos outros. Estamos aqui para incentivar e ajudar a quem precisa. Ajudar a quem estiver em dúvida do que fazer, ou que está em dúvida nas matérias.
            <br/>
            Estamos aqui a disposição daqueles que precisam, independente de raça, gênero, ou orientação sexual. Estamos aqui para ajudar sempre que precisar.
          </p>
        </div>
        <div className="column is-4 align paddingTop">
          <img className="imagem" src={comMulheres} alt=""/>
        </div>
      </div>
      <br/>
      <div className="columns is-centered">
        <div className="column is-3 align">
          <img className="imagemPC" src={pc} alt=""/>
        </div>
        <div className="column is-5">
          <p className="titulo">Redes sociais</p>
          <p className="texto">
            As páginas do nosso projeto estão repletas de informações de diversos assuntos ligados à tecnologias e outras áreas concorrentes, além de sempre mostrar inspirações de mulheres que foram/são importantes para nossa área.
            <br/>
            É por lá também que compartilhamos as nossas paixões específicas da área e algumas dicas, por lá conseguimos deixar vocês mais próximos da gente.
          </p>
          <br/>
          <div className="icones">
            <a href="" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FacebookBoxIcon className="icon"/>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <EmailIcon className="icon"/>
            </a>
          </div>
        </div>
      </div>
      <hr style={hr} />
    </div>
  </div>
);

export default Grupo;