import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card from './CardComponent';

//Actions
import {changeC1} from '../../store/sobre/action';
import {changeC2} from '../../store/sobre/action';
import {changeC3} from '../../store/sobre/action';
import {changeC4} from '../../store/sobre/action';

const Adm = (props) => {
  return (
    <div id="equipe-children">
      <div className="columns is-centered">
        <Card image={props.image1} name={props.name1} funcao={props.funcao1}>
          <a onClick={props.changeC1}>
            {props.c1? 'Menos' : 'Ver Mais'}
            {props.c1? 
              <i className="material-icons">keyboard_arrow_up</i> :
              <i className="material-icons">keyboard_arrow_down</i>
            }
          </a>
        </Card>

        <Card image={props.image2} name={props.name2} funcao={props.funcao2}>
          <a onClick={props.changeC2}>
            {props.c2? 'Menos' : 'Ver Mais'}
            {props.c2? 
              <i className="material-icons">keyboard_arrow_up</i> :
              <i className="material-icons">keyboard_arrow_down</i>
            }
          </a>
        </Card>

        <Card image={props.image3} name={props.name3} funcao={props.funcao3}>
          <a onClick={props.changeC3}>
            {props.c3? 'Menos' : 'Ver Mais'}
            {props.c3? 
              <i className="material-icons">keyboard_arrow_up</i> :
              <i className="material-icons">keyboard_arrow_down</i>
            }
          </a>
        </Card>

        <Card image={props.image4} name={props.name4} funcao={props.funcao4}>
          <a onClick={props.changeC4}>
            {props.c4? 'Menos' : 'Ver Mais'}
            {props.c4? 
              <i className="material-icons">keyboard_arrow_up</i> :
              <i className="material-icons">keyboard_arrow_down</i>
            }
          </a>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({c1: state.Card.c1, c2: state.Card.c2, c3: state.Card.c3, c4: state.Card.c4});
const mapDispatchToProps = dispatch => bindActionCreators({changeC1, changeC2, changeC3, changeC4}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Adm);