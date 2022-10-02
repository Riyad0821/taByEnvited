const Button = ({
  id = "btn",
  onClick,
  btnText = "Sample Button",
  btnSize = "sm",
}) => {
  return (
    <div className="items-center mx-auto">
      <button
        id={id}
        type="button"
        onClick={onClick}
        className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
      >
        {btnText}
      </button>
    </div>
  );
};
export default Button;
