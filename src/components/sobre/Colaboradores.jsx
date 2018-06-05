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

const Colab = () => (
  <div>
    <p className="titulo">
      Colaboradoras
    </p>
    <div className="container is-centered">
      <Conteudo
        img={Jusley}
        title="Jaine Conceição"
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
          <span><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a></span>
          <span><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterBoxIcon className="icon" /></a></span>
          <span><a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedinBoxIcon className="icon" /></a></span>
        </div>
      </Conteudo>
      <Conteudo
        img={Jusley}
        title="Natália"
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
    </div>
  </div>
);

export default Colab;