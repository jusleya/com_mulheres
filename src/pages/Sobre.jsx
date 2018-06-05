import React from 'react';

//Components
import Grupo from '../components/sobre/Grupo';

//CSS
import '../assets/styles/pages/sobre.css';
import Nos from '../components/sobre/Nos';

const Sobre = () => (
  <div id="sobre">
    <div className="section">
      <Grupo />
      <Nos />
    </div>
  </div>
);

export default Sobre;