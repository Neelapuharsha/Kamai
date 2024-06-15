import '../Buttons/Button.css';

  const Button = ({border, padding, textColor, text, backGroundColor, className}) => {
    const buttonStyle = {
      backgroundColor: backGroundColor,
      padding:padding,
      color:textColor,
      border:border
    };
  return (
  <>
    <button style={buttonStyle} className={className}>
      {text}
    </button>
  </>
  );
}

export default Button;