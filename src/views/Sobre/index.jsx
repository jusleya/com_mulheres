import React from 'react';

//Components
import Equipe    from './components/Equipe';
import Grupo     from './components/Grupo';
import Parceiros from './components/Parceiros';

//CSS
import './css/style.css';

const Sobre = () => (
  <div id="sobre">
    <div className="section">
      <Grupo />
      <Equipe />
      <Parceiros />
    </div>
  </div>
);

export default Sobre;