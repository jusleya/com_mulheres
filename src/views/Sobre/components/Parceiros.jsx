import React from 'react';

//Images
import gdg     from '../image/parceiros/gdg.png';
import dcomp   from '../image/parceiros/dcomp.png';
import womaker from '../image/parceiros/womaker.jpg';
import wtm     from '../image/parceiros/wtm.png';

//CSS


class Parceiros extends React.Component {
  render(){
    return (
      <div id="parceiros">
        <div className="container is-centered">
          <p className="titulo">Parceiros</p>
          <div className="columns v-centered is-centered">
            <div className="column is-3">
              <img className="imagem" src={gdg} alt=""/>
            </div>
            <div className="column is-3 espaco padding">
              <img className="imagem" src={wtm} alt=""/>
            </div>
            <div className="column is-2 espaco padding">
              <img className="imagem" src={dcomp} alt=""/>
            </div>
            <div className="column is-1 padding">
              <img className="imagem" src={womaker} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parceiros;