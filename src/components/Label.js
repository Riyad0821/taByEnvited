const Label = ({
  id = "label",
  labelText = "Your name",
  labelFor = "name",
}) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      for={labelFor}
    >
      {labelText}
    </label>
  );
};
export default Label;
