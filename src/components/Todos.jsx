import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <li></li>
            <div>Todos</div>
            <li></li>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                        style={{ color: 'white', background: 'red', marginLeft: '10px' }}
                        onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))}
        </>
    )
}
export default Todos;