import React from 'react';

//Components
import Equipe from '../components/sobre/Equipe';
import Grupo  from '../components/sobre/Grupo';

//CSS
import '../assets/styles/pages/sobre.css';

const Sobre = () => (
  <div id="sobre">
    <div className="section">
      <Grupo />
      <Equipe />
    </div>
  </div>
);

export default Sobre;