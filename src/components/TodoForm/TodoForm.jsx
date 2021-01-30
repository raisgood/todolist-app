import React from 'react';
import './TodoForm.css';

// Add and Clear Buttons

export default function TodoForm(props) {
    const updateData = event => {
        event.preventDefault();
        const todolist = document.querySelector('.js-todolist-item').value;
        const time = document.querySelector('.js-time').value;
        document.querySelector('.js-todolist-item').value = '';
        document.querySelector('.js-time').value = '';
        props.handleAdd(todolist, time);
    }

  return (
    <form onSubmit={ updateData }>
    <label className="label1"><strong>Write your Scheduled Activity Here:</strong></label>
      <input type="text" ClassName="todolist-item" required className="js-todolist-item" placeholder="List Activity" />
      <label className="label2"><strong>List the Scheduled Time and "Press Add":</strong></label>
      <input type="text" className="js-time" required placeholder="List Time" />
    <button type="submit">Add</button>
    <button onClick={props.handleClear}>Clear</button>
    </form>
  )
}
