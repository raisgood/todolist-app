import React from 'react';
import './TodoItem.css';
import editSolid from "./edit-solid.svg";
import checkSolid from "./check-solid.svg"

 

//Check Buttons

 

export default function TodoItem(props) {
    const [isReadOnly, updateIsReadOnly] = React.useState(true);
    const [todolist, setTodolist] = React.useState(props.todolist);
    const [time, setTime] = React.useState(props.time);
    const toggleReadyOnly = () => {
        updateIsReadOnly( oldValue => !oldValue );
    }

    const handleTodolist = (e) => {
        setTodolist(e.currentTarget.value);
        props.handleUpdate(props.index, e.currentTarget.value, time);
    }

    const handleTime = (e) => {
        setTime(e.currentTarget.value);
        props.handleUpdate(props.index, todolist, e.currentTarget.value);
    }


    let todolistContent = null;
    let timeContent = null;
    let image = null;
    if (isReadOnly) {
        todolistContent = todolist;
        timeContent = `(${time})`;
        image =  <img src={editSolid} alt="Edit todolist" className="edit-todolist" onClick={toggleReadyOnly} />;
    } else {
        todolistContent = <input type="text" value={todolist} onChange={handleTodolist} />;
        timeContent = <input type="text" value={time} onChange={handleTime} />;
        image =  <img src={checkSolid} alt="Edit todolist" className="edit-todolist" onClick={toggleReadyOnly} />  
    }

    return (
        <div className="todo-item">
            {todolistContent} {timeContent}
            {image}
        </div>
    )
}