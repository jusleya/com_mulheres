import React from 'react';

//Icones
import { EmailIcon, FacebookBoxIcon, InstagramIcon, LinkedinBoxIcon, TwitterBoxIcon } from 'mdi-react';

class Descricao extends React.Component {
  render(){
    const {...props} = this.props;
    return(
      <div>
        <p className="texto descricao">{props.descricao}</p>
        <span>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            { props.linkedin ?
            <LinkedinBoxIcon className="icon" />
            : null
            }
          </a>
        </span>
        <span>
          <a href={props.instagram} target="_blank" rel="noopener noreferrer">
            { props.instagram ?
              <InstagramIcon className="icon" />
              : null
            }
          </a>
        </span>
        <span>
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            { props.twitter ?
              <TwitterBoxIcon className="icon" />
              : null
            }
          </a>
        </span>
        <span>
          <a href={props.facebook} target="_blank" rel="noopener noreferrer">
            { props.facebook ?
              <FacebookBoxIcon className="icon"/>
              : null
            }
          </a>
        </span>
        <span>
          <a href={props.email} target="_blank" rel="noopener noreferrer">
            { props.email ?
              <EmailIcon className="icon"/>
              : null
            }
          </a>
        </span>
      </div>
    );
  }
}

export default Descricao;