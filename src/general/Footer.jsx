import React from 'react';
import {Columns, Column} from 'bloomer';
import {NavLink} from 'react-router-dom';

const hr = {backgroundColor:'#b0c5d9', height:'1px'}

const Footer = () => (
  <div id="footer">
    <div className="section">
      <div className="container">
        <Columns align="center">
          <Column>
            <h1>Eventos</h1>
            <ul>
              <li>
                <NavLink to="/eventos/calendario">Calendário</NavLink>
              </li>
              <li>
                <NavLink to="/eventos/realizados">Realizados</NavLink>
              </li>
            </ul>
          </Column>
          <Column>
            <h1>Sobre nós</h1>
          </Column>
          <Column>
            <h1>Contato</h1>
          </Column>
        </Columns>
      </div>
      <hr style={hr}/>
      <div className="container">
        <Columns className="final-footer">
          <Column>
            <p className="center">© Copyright 2018 | Todos os direitos reservados | Design por Regina Oliveira e desenvolvimento por Jusley Arley.</p>
          </Column>
        </Columns>
      </div>
    </div>
  </div>
);

export default Footer;