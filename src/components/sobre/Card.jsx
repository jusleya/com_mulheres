import React from 'react';

const Card = (props) => (
  <div id="card">
    <div className="box-card">
      <div className="column">
        <img className="imagem" src={props.image} alt=""/>
        <p className="name">{props.name}</p>
        <p className="funcao">{props.funcao}</p>
        {props.children}
      </div>
    </div>
  </div>
);

export default Card;