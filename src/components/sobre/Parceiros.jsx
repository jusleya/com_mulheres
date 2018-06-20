import React from 'react';

//Images
import gdg   from '../../assets/image/sobre/parceiros/gdg.png';
import wtm   from '../../assets/image/sobre/parceiros/wtm.png';
import dcomp from '../../assets/image/sobre/parceiros/dcomp.png';

//CSS


class Parceiros extends React.Component {
  render(){
    return (
      <div id="parceiros">
        <div className="container is-centered">
          <p className="titulo">
            Parceiros
          </p>
          <div className="columns is-centered">
            <div className="column is-1">
            </div>
            <div className="column is-3 espaco">
              <img src={gdg} alt=""/>
            </div>
            <div className="column is-3 espaco">
              <img src={wtm} alt=""/>
            </div>
            <div className="column is-2">
              <img src={dcomp} alt=""/>
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