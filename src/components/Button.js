import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    const { size } = this.props;
    const { value } = this.props;
    const { label } = this.props;
    const { className } = this.props;
    return (
      <div
        onClick={onClick}
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
        className={`btn ${className}`}
        data-size={size}
        data-value={value}
        role="button"
      >
        {label}
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
