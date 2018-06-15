import React from 'react';

//Icones
import { EmailIcon, FacebookBoxIcon, InstagramIcon, LinkedinBoxIcon, TwitterBoxIcon } from 'mdi-react';

class Descricao extends React.Component {
  render(){
    const {...props} = this.props;
    return(
      <div>
        <p className="descricao">{props.descricao}</p>
        <span>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinBoxIcon className="icon" />
          </a>
        </span>
        <span>
          <a href={props.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="icon" />
          </a>
        </span>
        <span>
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterBoxIcon className="icon" />
          </a>
        </span>
        <span>
          <a href={props.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookBoxIcon className="icon"/>
          </a>
        </span>
        <span>
          <a href={props.contato} target="_blank" rel="noopener noreferrer">
            <EmailIcon className="icon"/>
          </a>
        </span>
      </div>
    );
  }
}

export default Descricao;