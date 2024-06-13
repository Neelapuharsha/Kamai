import '../Buttons/Button.css';

  const Button = ({border, padding, textColor, text, backGroundColor }) => {
    const buttonStyle = {
      backgroundColor: backGroundColor,
      padding:padding,
      color:textColor,
      border:border
    };
  return (
  <>
    <button style={buttonStyle}>
      {text}
    </button>
  </>
  );
}

export default Button;