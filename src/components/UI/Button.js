import style from "./Button.module.scss";

function Button({ className, onClick, children, title, disable }) {
  return (
    <button
      className={`${style.inputBtn} ${className}`}
      onClick={onClick}
      title={title}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default Button;
