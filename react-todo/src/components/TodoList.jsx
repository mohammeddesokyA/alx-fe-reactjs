import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li
  key={todo.id}
  style={{
    textDecoration: todo.completed ? "line-through" : "none",
    cursor: "pointer",
  }}
>
  <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
  <button
    onClick={(e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    }}
  >
    Delete
  </button>
</li>

        ))}
      </ul>
    </div>
  );
};

export default TodoList;
