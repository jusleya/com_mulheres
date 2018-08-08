import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = (props) => (
  props.disabled ? (
    <div id="button-component">
      <button className="button disable">
        {props.children}
      </button>
    </div>
  ) :
  props.type === 'submit' ? (
    <div id="button-component">
      <button className={`button active ${props.isLoading ? 'is-loading' : ''}`}>
        {props.children}
      </button>
    </div>
  ) : (
  <div id="button-component">
    <NavLink to={props.link} className="button active" disabled={props.disabled}>
      {props.children}
    </NavLink>
  </div>
  )
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  link: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Button;
