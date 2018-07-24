import React from 'react';

//Images
import gdg   from '../image/parceiros/gdg.png';
import wtm   from '../image/parceiros/wtm.png';
import dcomp from '../image/parceiros/dcomp.png';

//CSS


class Parceiros extends React.Component {
  render(){
    return (
      <div id="parceiros">
        <div className="container is-centered">
          <p className="titulo">
            Parceiros
          </p>
          <div className="columns is-centered center-div">
            <div className="column is-1">
            </div>
            <div className="column is-3 espaco center-item">
              <img className="imagem" src={gdg} alt=""/>
            </div>
            <div className="column is-3 espaco center-item">
              <img className="imagem" src={wtm} alt=""/>
            </div>
            <div className="column is-2 center-item">
              <img className="imagem" src={dcomp} alt=""/>
            </div>
            <div className="column is-1">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parceiros;