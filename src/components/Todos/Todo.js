import { AiOutlineClose } from "react-icons/ai";

import { FcTodoList } from "react-icons/fc";

import styles from "./Todo.module.scss";

function Todo({ todo, deleteTodo, toggleTodo, index }) {
  const classBtnTodo = `${styles.TodoBtnsItem} ${styles.button}`;

  return (
    <div
      className={`${styles.todoItem} ${todo.isComplite ? styles.complite : ""}`}
    >
      <h3 className={styles.bodyTodo}>
        <span className={styles.listTodo}>{index + 1}. </span>
        {todo.text}
      </h3>
      <div className={styles.TodoBtns}>
        <FcTodoList
          onClick={() => toggleTodo(todo.id)}
          className={classBtnTodo}
        />
        <AiOutlineClose
          className={`${classBtnTodo} ${styles.closeBtn}`}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
