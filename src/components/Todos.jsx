import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Todos</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            style={{ color: "white", background: "red", marginLeft: "10px" }}
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
