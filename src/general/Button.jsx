import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      this.props.disabled
      ?
      <button className="button-leaked-disable">
        {this.props.children}
      </button>
      :
      <NavLink to={this.props.link} className="button-leaked-active" disabled={this.props.disabled}>
        {this.props.children}
      </NavLink>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
