import React from 'react';

//Components
import Conteudo from './Conteudo';
import Button   from '../../general/Button';

//Image
import nos from '../../assets/image/home/quem-somos.jpg'

const Nos = () => (
  <div className="section">
    <div className="container">
      <Conteudo
        img={nos}
        title="COM² Mulheres"
      >
        Criado em junho de 2017, somos um grupo de sete
        mulheres que almejam a inclusão de mais mulheres
        na área de computação. Queremos igualdade, pois
        não é o nosso gênero que define se somos capazes
        de programar.
        <br/>
        <br/>
        <div align="center"><Button link="/sobre">Nos conheça<i className="material-icons">keyboard_arrow_right</i></Button></div>
      </Conteudo>
      <hr className="is-centered" style={{border:"1px dashed rgb(189, 203, 216)"}}/>
    </div>
  </div>
);

export default Nos;