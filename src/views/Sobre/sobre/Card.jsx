import React from 'react';

const Card = (props) => {
  return (
    <div className="column">
      <div id="card">
        <div className={`${props.semFoto ? 'box-noCard' : 'box-card'}`}>
          <img className="imagem" src={props.image} alt=""/>
          <p className="name">{props.name}</p>
          <p className="funcao">{props.funcao}</p>
          <div className="ver-mais">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;