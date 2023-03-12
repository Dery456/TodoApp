import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import Button from "../UI/Button";
import styles from "./TodoAction.module.scss";

function TodoAction({ resetTodo, deleteCompliteTodo, disable }) {
  return (
    <div className={styles.ActionButton}>
      <Button title="reset" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="complite"
        onClick={deleteCompliteTodo}
        disable={disable}
        className={disable ? styles.notActive : " "}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoAction;
