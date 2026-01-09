import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../features/todo/todoSlice";
import "../App.css";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const status = useSelector(state => state.todo.status);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        dispatch(addTodoAsync(input));
        setInput("");
    };

    return (
        <form onSubmit={addTodoHandler}>
            <input
                type="text"
                className="todo-input"
                placeholder="Enter Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={status === "loading"}
            />
            <button
                type="submit"
                disabled={status === "loading"}
                style={{ color: "black", background: "green" }}
            >
                {status === "loading" ? "Adding..." : "Add Todo"}
            </button>
        </form>
    );
}

export default AddTodo;
