import { BsArrowRightShort } from "react-icons/bs";

function Button({ type, text, white }) {
  return (
    <button
      type={type || "button"}
      className={!white ? "button" : "white-button"}
    >
      <span>{text}</span>
      <span>
        <BsArrowRightShort size={30} />
      </span>
    </button>
  );
}
export default Button;
