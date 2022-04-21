import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    Click, KeyPress, Name, val, lab,
  } = props;

  return (
    <div
      onClick={Click}
      onKeyPress={KeyPress}
      tabIndex="0"
      className={`btn ${Name}`}
      data-value={val}
      role="button"
    >
      {lab}
    </div>
  );
};

Button.propTypes = {
  Click: PropTypes.func.isRequired,
  Name: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  lab: PropTypes.string.isRequired,
  KeyPress: PropTypes.func.isRequired,
};

export default Button;
