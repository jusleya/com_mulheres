import React from 'react';

//Components
import Conteudo from './Conteudo';

//Image
import nos from '../../assets/image/home/quem-somos.jpg'
const Nos = () => (
  <div style={{paddingTop:'30px'}}>
    <div className="section">
      <div className="container">
        <Conteudo
          img={nos}
          title="Eventos"
          position="left"
        >
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque laoreet ligula
          sed odio aliquam, sit amet eleifend magna lobortis.
          Sed tristique dui quis odio consequat, non sodales
          quam pellentesque.
        </Conteudo>
      </div>
    </div>
  </div>
);

export default Nos;