import { takeLatest, put, delay } from "redux-saga/effects";
import {
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure
} from "./todoSlice";
import { nanoid } from "@reduxjs/toolkit";

// Worker Saga
function* addTodoWorker(action) {
    try {
        // simulate API delay
        yield delay(1000);

        const todo = {
            id: nanoid(),
            text: action.payload
        };

        // dispatch success action
        yield put(addTodoSuccess(todo));
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        yield put(addTodoFailure());
    }
}

// Watcher Saga
export function* todoSaga() {
    yield takeLatest(addTodoRequest.type, addTodoWorker);
}
