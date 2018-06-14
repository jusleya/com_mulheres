import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card from './CardComponent';

//Actions
import {changeC5} from '../../store/sobre/action';
import {changeC6} from '../../store/sobre/action';

const Colab = (props) => {
  return (
    <div className="columns is-centered">
      <div className="column"></div>
      <Card image={props.image5} name={props.name5} funcao={props.funcao5}>
        <a onClick={props.changeC5}>
          {props.c5? 'Menos' : 'Ver Mais'}
          {props.c5? 
            <i className="material-icons">keyboard_arrow_up</i> :
            <i className="material-icons">keyboard_arrow_down</i>
          }
        </a>
      </Card>

      <Card image={props.image6} name={props.name6} funcao={props.funcao6}>
        <a onClick={props.changeC6}>
          {props.c6? 'Menos' : 'Ver Mais'}
          {props.c6? 
            <i className="material-icons">keyboard_arrow_up</i> :
            <i className="material-icons">keyboard_arrow_down</i>
          }
        </a>
      </Card>
      <div className="column"></div>
    </div>
  );
}

const mapStateToProps = state => ({c5: state.Card.c5, c6: state.Card.c6});
const mapDispatchToProps = dispatch => bindActionCreators({changeC5, changeC6}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Colab);