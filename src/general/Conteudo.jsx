import React from 'react';

//CSS
import '../assets/styles/general/conteudo.css';

const Image = (props) => (
  <div id="conteudo">
    <img className="imagem" src={props.img} alt=""/>
  </div>
);

const Text = (props) => (
  <div id="conteudo">
    <p className="titulo">{props.title}</p>
    <br/>
    <div className="text">{props.children}</div>
  </div>
);

const Conteudo = (props) => {
  return props.position === 'left' ? (
    <div id="conteudo">
      <div className="columns is-centered">
        <div className="column is-6">
          <Image img={props.img} />
        </div>
        <div className="column is-5">
          <Text title={props.title}>{props.children}</Text>
        </div>
      </div>
    </div>
  ) : (
    <div id="conteudo">
      <div className="columns is-centered">
        <div className="column is-5">
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