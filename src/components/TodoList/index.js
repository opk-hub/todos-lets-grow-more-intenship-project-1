// TodoList.js
import React from 'react';
import TodoItem from '../TodoItem';
const TodoList = ({ todos, onTodoStatusChange, onDeleteTodo }) => {
  return (
    <ul className="todo-items-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.uniqueNo}
          todo={todo}
          onTodoStatusChange={onTodoStatusChange}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
