import React from 'react';

//Components
import Conteudo from './Conteudo';
import Button   from '../../general/Button';

//Image
import nos from '../../assets/image/home/quem-somos.jpg'

const ContatoComponent = () => (
  <div style={{paddingTop:'70px'}}>
    <div className="section">
      <div className="container">
        <Conteudo
          img={nos}
          title="Entre em contato"
        >
          Queremos saber sua opinião sobre nosso trabalho.
          Também queremos ajudar no que for preciso é só entrar
          em contato pelas nossas redes sociais ou por e-mail.
          <br/>
          <br/>
          <div align="center"><Button link="/contato">Contato<i className="material-icons">keyboard_arrow_right</i></Button></div>
        </Conteudo>
      </div>
    </div>
  </div>
);

export default ContatoComponent;