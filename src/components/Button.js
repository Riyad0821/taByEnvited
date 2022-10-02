import create_my_event from "../resource/create_my_event.png";
const Button = ({ id = "btn", btnText = "Sample Button", btnSize = "sm" }) => {
  return (
    <div className="items-center mx-auto">
      <button
        type="button"
        class="text-white bg-gradient-to-r from-violet-500 to-fuchsia-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
      >
        <img
          className="object-contain mx-3 my-3"
          src={create_my_event}
          alt="Event Card"
        ></img>
      </button>
    </div>
  );
};
export default Button;
