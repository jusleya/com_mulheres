import React from 'react';

//Components
import Conteudo from '../../general/Conteudo';

//Images
import Jusley from '../../assets/image/sobre/nos/jusley.jpeg';

//Icones
import {
  FacebookBoxIcon,
  LinkedinBoxIcon,
  InstagramIcon,
  TwitterBoxIcon
} from 'mdi-react';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Adm = () => (
  <div>
    <p className="titulo">
      Administração
    </p>
    <div className="container is-centered">
      <Conteudo
        img={Jusley}
        title="Alana Lucia"
        position="left"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam vulputate tristique vehicula. Curabitur egestas ultrices
        scelerisque. Donec id malesuada ligula, eget vestibulum leo.
        Curabitur et mattis turpis. Vestibulum efficitur, nunc ve 
        porta volutpat, quam augue lacinia tellus, ut tincidunt mauris
        augue vitae massa. Morbi aliquam, turpis eget sollicitudin 
        malesuada, neque sapien ultricies est, sit amet auctor leo mi ac 
        nisi. Aenean convallis sapien nisi, nec bibendum odio iaculis vitae.
        Praesent sit amet risus massa. Donec vel leo quis tortor aliquam
        mollis eget in nisle. Mauris felis turpis.
        <br/>
        <br/>
        <div align="center">
          <span><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookBoxIcon style={{heigth:"30px"}} className="icon"/></a></span>
          <span><a href="https://www.instagram.com/alanaluci/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a></span>
          <span><a href="https://twitter.com/alanaluci" target="_blank" rel="noopener noreferrer"><TwitterBoxIcon className="icon" /></a></span>
          <span><a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedinBoxIcon className="icon" /></a></span>
        </div>
      </Conteudo>
      <Conteudo
        img={Jusley}
        title="Jusley Arley"
      >
        Estudante de Ciência da Computação na Universidade Federal
        de Sergipe, pesquisadora na área de processamento de imagem
        e computação gráfica. Atualmente estagiando na empresa GetInfo
        como desenvolvedora Front-End. Uma das criadoras do projeto 
        "Computação com Mulheres" (COM² Mulheres), organizer no GDG 
        Aracaju e lead no projeto WTM Aracaju. Amo computação gráfica,
        livros e karatê ♥.
        <br/>
        <br/>
        <div align="center">
          <span><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookBoxIcon style={{heigth:"30px"}} className="icon"/></a></span>
          <span><a href="https://www.instagram.com/jusley_a/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a></span>
          <span><a href="https://twitter.com/jusley_a" target="_blank" rel="noopener noreferrer"><TwitterBoxIcon className="icon" /></a></span>
          <span><a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedinBoxIcon className="icon" /></a></span>
        </div>
      </Conteudo>
      <Conteudo
        img={Jusley}
        title="Sthefane Soares"
        position="left"
      >
        Formada em Análise e Desenvolvimento de Sistemas; Desenvolvedora Java,
        C, C# e PHP; Entusiasta do Software Livre; Colaboradora do LibreOffice
        Brasil e dos grupos Computação com Mulheres e WoMakersCode. Trabalha
        com desenvolvimento de aplicativos e é apaixonada por Engenharia de
        Software.
        <br/>
        <br/>
        <div align="center">
          <span><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookBoxIcon style={{heigth:"30px"}} className="icon"/></a></span>
          <span><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a></span>
          <span><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterBoxIcon className="icon" /></a></span>
          <span><a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedinBoxIcon className="icon" /></a></span>
        </div>
      </Conteudo>
      <Conteudo
        img={Jusley}
        title="Verônica"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam vulputate tristique vehicula. Curabitur egestas ultrices
        scelerisque. Donec id malesuada ligula, eget vestibulum leo.
        Curabitur et mattis turpis. Vestibulum efficitur, nunc ve 
        porta volutpat, quam augue lacinia tellus, ut tincidunt mauris
        augue vitae massa. Morbi aliquam, turpis eget sollicitudin 
        malesuada, neque sapien ultricies est, sit amet auctor leo mi ac 
        nisi. Aenean convallis sapien nisi, nec bibendum odio iaculis vitae.
        Praesent sit amet risus massa. Donec vel leo quis tortor aliquam
        mollis eget in nisle. Mauris felis turpis.
        <br/>
        <br/>
        <div align="center">
          <span><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookBoxIcon style={{heigth:"30px"}} className="icon"/></a></span>
          <span><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a></span>
          <span><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterBoxIcon className="icon" /></a></span>
          <span><a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedinBoxIcon className="icon" /></a></span>
        </div>
      </Conteudo>
      <hr style={hr}/>
    </div>
  </div>
);

export default Adm;