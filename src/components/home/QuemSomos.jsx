import React from 'react';

//Components
import Conteudo from './Conteudo';

//Image
import nos from '../../assets/image/home/quem-somos.jpg'
const Nos = () => (
  <div style={{paddingTop:'70px'}}>
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
        </Conteudo>
      </div>
    </div>
  </div>
);

export default Nos;