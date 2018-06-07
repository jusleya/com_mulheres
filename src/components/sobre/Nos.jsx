import React from 'react';

import Adm from './Administracao';
import Colab from './Colaboradores';

const Nos = () => (
  <div id="nos">
    <div className="container">
      <p className="titulo">Nós</p>
      <Adm />
      <Colab />
    </div>
  </div>
);

export default Nos;