import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); 
};

return (
  <div>
    <h2>Todo List</h2>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter a new todo"
    />
    <button onClick={handleAddTodo}>Add</button>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>

    </div>
  );
}

export default TodoList;