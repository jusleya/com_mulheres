import React from 'react';

import Adm from './Administracao';
import Colab from './Colaboradores';

const Nos = () => (
  <div id="nos">
    <div className="container">
      <p className="titulo">A gente</p>
      <Adm />
      <br/>
      <br/>
      <Colab />
    </div>
  </div>
);

export default Nos;