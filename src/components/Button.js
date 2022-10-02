const Button = ({ id = "btn", btnText = "Sample Button", btnSize = "sm" }) => {
  return (
    <div>
      <button>{btnText}</button>
    </div>
  );
};
export default Button;
