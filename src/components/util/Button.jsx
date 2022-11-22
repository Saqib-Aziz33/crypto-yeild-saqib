import { BsArrowRightShort } from "react-icons/bs";

function Button({ text, white, style }) {
  return (
    <button style={style} className={!white ? "button" : "white-button"}>
      <span>{text}</span>
      <span>
        <BsArrowRightShort size={30} />
      </span>
    </button>
  );
}
export default Button;
