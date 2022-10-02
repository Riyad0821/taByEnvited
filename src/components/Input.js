const Input = ({
  id = "input",
  type = "text",
  name = "",
  onChange,
  placeholderText = "Enter your input",
  accept,
}) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      name={name}
      placeholder={placeholderText}
      onChange={onChange}
      accept={accept}
    />
  );
};
export default Input;
