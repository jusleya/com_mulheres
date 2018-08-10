import React from 'react';
import {Columns, Column} from 'bloomer';
//Icones
import { EmailIcon, FacebookBoxIcon, InstagramIcon } from 'mdi-react';

const Footer = () => (
  <div id="footer">
    <div className="section padding">
      <div className="container">
        <Columns isCentered className="final-footer">
          <Column isSize="3/4">
            <p>© Copyright 2018 | Todos os direitos reservados | Design e desenvolvimento por Jusley Arley.</p>
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