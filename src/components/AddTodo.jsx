import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import '../App.css'

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <form onSubmit={addTodoHandler}>
            <input type="text"
                className='todo-input'
                placeholder='Enter Todo'
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button
                type='submit'
                style={{ color: 'black', background: 'green' }}>Add Todo</button>
        </form>
    );
}

export default AddTodo;