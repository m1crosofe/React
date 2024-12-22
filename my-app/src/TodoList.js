import React, { useState } from 'react';
import './TodoList.css'; 

const rainbowColors = [
  '#ff0000', 
  '#ff7f00', 
  '#ffff00', 
  '#00ff00', 
  '#00ffff', 
  '#0000ff', 
  '#4b0082', 
];

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      completed: false,
      color: rainbowColors[todos.length % rainbowColors.length], 
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2 className="gradient-text">Список дел</h2>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.color, 
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const todoText = e.target.elements.todo.value;
        addTodo(todoText);
        e.target.reset();
      }}>
        <input type="text" name="todo" placeholder="Добавить дело" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};