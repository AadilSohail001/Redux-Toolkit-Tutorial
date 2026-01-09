import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// Async Thunk
export const addTodoAsync = createAsyncThunk(
    "todo/addTodoAsync",
    async (text) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            id: nanoid(),
            text
        };
    }
);

// Initial State
const initialState = {
    todos: [],
    status: "idle" // idle | loading | success | error
};

// Slice
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodoAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.status = "success";
                state.todos.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state) => {
                state.status = "error";
            });
    }
});

export const { removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
