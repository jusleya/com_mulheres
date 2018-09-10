import React from 'react';
import { NavLink } from 'react-router-dom';

const Destaque = (props) => (
  <div id="destaque">
    <div className="columns">
      <div className="column is-5 align">
        <img className="image padding-image" src={props.imagem} alt="" />
      </div>
      <div className="column is-7">
        <h1 className="titulo padding-titulo">{props.title}</h1>
        <div className="descricao padding-descricao">
          <p>
            <strong>Data:</strong> {props.data},
            <br />
            <strong>Local:</strong> <a className="mapa" href={props.linkMaps} target="_blank" rel="noopener noreferrer">{props.auditorio}</a>,
            <br />
            <strong>Valor:</strong> {props.valor}.
          </p>
          <br />
          <div align="center"><NavLink className="button-active" to={props.linkEvt}>Saiba Mais<i className="material-icons">keyboard_arrow_right</i></NavLink></div>
        </div>
      </div>
    </div>
  </div>
);

export default Destaque;