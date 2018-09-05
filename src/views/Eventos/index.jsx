import React from 'react';

//Components
import Destaque from './components/Destaque';

//CSS
import './css/style.css';

const Eventos = () => (
  <div id="eventos">
    <div className="section">
      <div className="container">
        <div className="box-card">
          <Destaque/>
        </div>
      </div>
    </div>
  </div>
);

export default Eventos;