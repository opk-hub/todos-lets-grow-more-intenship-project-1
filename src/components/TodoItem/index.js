import React from 'react';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
const TodoItem = ({ todo, onTodoStatusChange, onDeleteTodo }) => {
  return (
    <li className={`todo-item-container d-flex flex-row ${todo.isChecked ? 'checked' : ''}`}>
      <IconButton
        aria-label="done"
        onClick={() => onTodoStatusChange(todo.uniqueNo)}
      >
        <DoneIcon color={todo.isChecked ? 'primary' : 'disabled'} />
      </IconButton>
        <label className="checkbox-label">{todo.text}</label>


        <IconButton  className="delete-icon-container"
            aria-label="delete"
            onClick={() => onDeleteTodo(todo.uniqueNo)}
          >
            <ClearIcon />
          </IconButton>
    </li>
  );
};

export default TodoItem;
