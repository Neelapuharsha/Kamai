import '../Buttons/Button.css';

  const Button = ({width, height, border, padding, textColor, text, backGroundColor }) => {
    const buttonStyle = {
      width:width,
      height:height,
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