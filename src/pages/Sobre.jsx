import React from 'react';

//Components
import Equipe    from '../components/sobre/Equipe';
import Grupo     from '../components/sobre/Grupo';
import Parceiros from '../components/sobre/Parceiros';

//CSS
import '../assets/styles/pages/sobre.css';

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