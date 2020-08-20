import React from 'react';

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li 
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}>
    {text}
  </li>
);
export const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map ((todo, index) => 
      <Todo
        key={index}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;