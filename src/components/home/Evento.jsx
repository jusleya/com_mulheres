import React from 'react';

//Components
import Conteudo from '../../general/Conteudo';
import Button   from '../../general/Button';

//Image
import nos from '../../assets/image/home/quem-somos.jpg';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Nos = () => (
  <div className="container">
    <Conteudo
      img={nos}
      title="Eventos"
      position="left"
    >
      Eventualmente realizamos eventos independentes ou
      com grupos parceiros que nos permite ficar
      mais próximos do nosso público compartilhando
      nossas experiências na área e/ou na vida acadêmica.
      <br/>
      <br/>
      <div align="center"><Button link="/eventos">Saiba mais<i className="material-icons">keyboard_arrow_right</i></Button></div>
    </Conteudo>
    <hr style={hr}/>
  </div>
);

export default Nos;