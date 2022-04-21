const Button = (Click, KeyPress, Name, val, lab) => {
  const { onClick } = Click;
  const { value } = val;
  const { label } = lab;
  const { className } = Name;
  const { onKeyPress } = KeyPress;
  return (
    <div
      onClick={() => onClick}
      onKeyPress={onKeyPress}
      tabIndex="0"
      className={`btn ${className}`}
      data-value={value}
      role="button"
    >
      {label}
    </div>
  );
};



export default Button;
