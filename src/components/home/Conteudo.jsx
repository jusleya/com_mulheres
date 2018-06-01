import React from 'react';

import '../../assets/styles/components/home/conteudo.css';

const Image = (props) => (
  <div id="conteudo">
    <img className="imagem" src={props.img} alt=""/>
  </div>
);

const Text = (props) => (
  <div id="conteudo">
    <p className="titulo">{props.title}</p>
    <br/>
    <span className="text">{props.children}</span>
  </div>
);

const Conteudo = (props) => {
  return props.position === 'left' ? (
    <div id="conteudo">
      <div className="columns is-centered">
        <div className="column is-6">
          <Image img={props.img} />
        </div>
        <div className="column is-4">
          <Text title={props.title}>{props.children}</Text>
        </div>
      </div>
    </div>
  ) : (
    <div id="conteudo">
      <div className="columns is-centered">
        <div className="column is-4">
          <Text title={props.title}>{props.children}</Text>
        </div>
        <div className="column is-6">
          <Image img={props.img} />
        </div>
      </div>
    </div>
  )
}

export default Conteudo;