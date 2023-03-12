import { useState } from "react";

import { v4 as uuid4 } from "uuid";

import "./App.scss";
import TodoAction from "./components/Todos/TodoAction";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComplite: false,
      id: uuid4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplite: !todo.isComplite }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompliteTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplite));
  };

  /*
  const chekDisableHandler = () => {
    todos.map((todo) => disableState = todo.isComplite);
  };
*/

  const compliteTodoCount = todos.filter((todo) => todo.isComplite).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      <div className="contentWrapper">
        {todos.length > 0 && (
          <TodoAction
            resetTodo={resetTodoHandler}
            deleteCompliteTodo={deleteCompliteTodoHandler}
            disable={compliteTodoCount > 0 ? false : true}
          />
        )}

        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
        {todos.length === 0 && <h2>Todo list is empty</h2>}
        {compliteTodoCount > 0 && (
          <h2>{`Complite is ${compliteTodoCount} todo`}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
