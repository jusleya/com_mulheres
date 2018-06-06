import React from 'react';

const Card = (props) => (
  <div id="card">
    <div className="box-card">
      <div className="column">
        <img src={props.image} alt=""/>
        <p className="name">{props.name}</p>
        <p className="funcao">{props.funcao}</p>
      </div>
    </div>
  </div>
);

export default Card;