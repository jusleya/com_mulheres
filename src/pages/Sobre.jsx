import React from 'react';

//Components
import Grupo from '../components/sobre/Grupo';

//CSS
import '../assets/styles/pages/sobre.css';
import Equipe from '../components/sobre/Equipe';

const Sobre = () => (
  <div id="sobre">
    <div className="section">
      <Grupo />
      <Equipe />
    </div>
  </div>
);

export default Sobre;