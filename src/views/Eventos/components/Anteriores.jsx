import React from 'react';

import Button   from '../../../components/Button';

//Image
import womakers from '../image/womakers.jpg';

const Anteriores = () => (
  <div id="anteriores">
    <div className="container">
      <p className="titulo">Eventos Anteriores</p>
      <div className="columns">
        <div align="center" className="column is-4 box-right container-column">
          <p className="titulo-evento">WomakersCode Summit Nordeste</p>
          <img className="image" src={womakers} alt=""/>
          <p className="descricao">
            O Evento <i>WomakersCode</i> ocorreu no dia 18 de agosto de 2018, que teve foco no desenvolvimento web e mobile.
          </p>
          <br/>
          <div align="center"><Button type="" link="/pagina-evento">Saiba Mais<i className="material-icons">keyboard_arrow_right</i></Button></div>
        </div>
        <div align="center" className="column is-4 box-right container-column">
          <p className="titulo-evento">WomakersCode Summit Nordeste</p>
            <img className="image" src={womakers} alt=""/>
            <p className="descricao">
              O Evento <i>WomakersCode</i> ocorreu no dia 18 de agosto de 2018, que teve foco no desenvolvimento web e mobile.
            </p>
            <br/>
            <div align="center"><Button type="" link="/">Saiba Mais<i className="material-icons">keyboard_arrow_right</i></Button></div>
        </div>
        <div align="center" className="column is-4 container-column">
          <p className="titulo-evento">WomakersCode Summit Nordeste</p>
            <img className="image" src={womakers} alt=""/>
            <p className="descricao">
              O Evento <i>WomakersCode</i> ocorreu no dia 18 de agosto de 2018, que teve foco no desenvolvimento web e mobile.
            </p>
            <br/>
            <div align="center"><Button type="" link="/">Saiba Mais<i className="material-icons">keyboard_arrow_right</i></Button></div>
        </div>
      </div>
    </div>
  </div>
);

export default Anteriores;