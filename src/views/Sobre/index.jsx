import React from 'react';

//Components
import Equipe    from './sobre/Equipe';
import Grupo     from './sobre/Grupo';
import Parceiros from './sobre/Parceiros';

//CSS
import './css/sobre.css';

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