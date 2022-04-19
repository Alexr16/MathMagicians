import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Display extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="display">
        {data}
      </div>
    );
  }
}

Display.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Display;
