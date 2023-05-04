import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="todo-input" 
            placeholder='Actulizar tarea' />
            <button type="submit" className='todo-btn'><FontAwesomeIcon icon={faCheck}/></button>
        </form>
    )
}