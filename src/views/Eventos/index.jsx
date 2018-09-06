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
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">
              <a class="pagination-previous">Previous</a>
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li><a class="pagination-link" aria-label="Goto page 1" aria-current="page">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Eventos;