import React from 'react';

//Components
import Conteudo from '../../general/Conteudo';
import Button   from '../../general/Button';

//Image
import nos from '../../assets/image/home/quem-somos.jpg'

const ContatoComponent = () => (
  <div className="container">
    <Conteudo
      img={nos}
      title="Parceiros"
    >
      Queremos juntar pessoas/grupos que tenham objetivos semelhantes ao nosso para nos tornarmos uma comunidade mais forte. Quer ser um parceiro ou ser um colaborador com nossa página?
      <br/>
      <br/>
      <div align="center"><Button link="/contato">Entre em contato<i className="material-icons">keyboard_arrow_right</i></Button></div>
    </Conteudo>
  </div>
);

export default ContatoComponent;