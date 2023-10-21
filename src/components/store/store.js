import { configureStore } from "@reduxjs/toolkit";
import todoRecuder from "./reducers/todoSlice";
import todoReducer from "./reducers/todoSlice";


const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store;