import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

// To Do List Function

export default function TodoList({items, handleUpdate}) {
    const markup = items.map ( item =>
        <TodoItem key={item.key} 
        index={item.key} 
        todolist={item.todolist} 
        time={item.time} 
        handleUpdate={handleUpdate} />);
  return (
    <div className="todolist-list-container">
      {markup}
    </div>
  )
}
