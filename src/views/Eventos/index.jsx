import React from 'react';

//Components
import Anteriores from './components/Anteriores';
import Destaque from './components/Destaque';

//CSS
import './css/style.css';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Eventos = () => (
  <div id="eventos">
    <div className="section">
      <div className="container">
        <div className="box-card">
          <Destaque/>
        </div>
        <hr style={hr}/>
      </div>
      <Anteriores/>
      <div className="container paginas">
        <div className="columns is-centered">
          <div className="column is-6">
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
              <a className="pagination-previous button-active">Anterior</a>
              <a className="pagination-next button-active">Próximo</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Eventos;