import React from 'react';

//Components
import Button   from '../../../components/Button';

//Image
import evento from '../image/evento.png';

const Destaque = () => (
  <div id="destaque">
    <div className="columns">
      <div className="column is-5 align">
        <img className="image padding-image" src={evento} alt=""/>
      </div>
      <div className="column is-7">
        <h1 className="titulo padding-titulo">{`Evento de empreendedorismo em Aracaju`}</h1>
        <div className="descricao padding-descricao">
          <p>
            <strong>Data:</strong> 01 de dezembro de 2018,
            <br/>
            <strong>Local:</strong> <a className="mapa" href="https://goo.gl/maps/hdn5D2UK38K2" target="_blank" rel="noopener noreferrer"><u>Auditório da Faculdade Maurício de Nassau,</u></a>
            <br/>
            <strong>Valor:</strong> Um quilo de alimento não perecível¹ ou ração para animal de estimação².
          </p>
          <br/>
          <div align="center"><Button type="" link="/">Saiba Mais<i className="material-icons">keyboard_arrow_right</i></Button></div>
        </div>
      </div>
    </div>
  </div>
);

export default Destaque;