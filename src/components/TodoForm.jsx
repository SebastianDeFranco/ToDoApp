import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="todo-input" 
            placeholder='Nueva Tarea' />
            <button type="submit" className='todo-btn'><FontAwesomeIcon icon={faPlus}/></button>
        </form>
    )
}