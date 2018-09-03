import React from 'react';
import {Columns, Column} from 'bloomer';

//Icones
import { EmailIcon, FacebookBoxIcon, InstagramIcon } from 'mdi-react';

//CSS
import './css/style.css';

const Footer = () => (
  <div id="footer">
    <div className="section padding">
      <div className="container">
        <Columns isCentered className="final-footer">
          <Column isSize="3/4">
            <p>© Copyright 2018 | Todos os direitos reservados | Design e desenvolvimento por <u><a href="https://br.linkedin.com/in/jusley-arley-422637143" target="_blank" rel="noopener noreferrer">Jusley Arley</a></u>.</p>
          </Column>
          <Column className="align">
            <a href="https://www.instagram.com/com.mulheres/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="icon" />
            </a>
            <a href="https://www.facebook.com/com2mulheres/" target="_blank" rel="noopener noreferrer">
              <FacebookBoxIcon className="icon"/>
            </a>
            <a href="mailto:commulheres@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon className="icon"/>
            </a>
          </Column>
        </Columns>
      </div>
    </div>
  </div>
);

export default Footer;