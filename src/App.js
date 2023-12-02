import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoList')) || [];
    setTodos(storedTodos);
  }, []);



  const onAddTodo = () => {
    if (!userInput) {
      alert('Enter Valid Text');
      return;
    }

    const newTodo = {
      text: userInput,
      uniqueNo: todos.length + 1,
      isChecked: false,
    };

    setTodos([...todos, newTodo]);
    setUserInput('');
  };

  const onTodoStatusChange = (uniqueNo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.uniqueNo === uniqueNo
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      )
    );
  };

  const onDeleteTodo = (uniqueNo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.uniqueNo !== uniqueNo)
    );
  };

  return (
    <div className="todos-bg-container">
      <div>
      <div className='card'>

      <h1 className="todos-heading">My Todo List</h1>
      <div className="container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="todo-user-input"
              placeholder="What needs to be done?"
            />
            <button className="button" onClick={onAddTodo}>
              Add
            </button>
            </div>
            </div>
            <TodoList
              todos={todos}
              onTodoStatusChange={onTodoStatusChange}
              onDeleteTodo={onDeleteTodo}
            />
      </div>
    </div>
  );
};

export default App;
