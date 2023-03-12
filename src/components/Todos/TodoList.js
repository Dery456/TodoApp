import Todo from "./Todo";
import styles from "./TodoList.module.scss";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo, index) => {
        if (todo.text.length > 0) {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              index={index}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default TodoList;
