import { useState } from "react";

import styles from "./TodoForm.module.scss";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHendler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmitHendler} className={styles.TodoForm}>
      <input
        className={styles.TodoInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter"
      />
      <button className={styles.inputBtn} type="submit">
        click
      </button>
    </form>
  );
}

export default TodoForm;
