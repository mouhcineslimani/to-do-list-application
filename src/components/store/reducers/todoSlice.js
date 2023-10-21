import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        taskSelected: null,
        myDefaultTask: { id: -1, title: '', completed: false },
        tasks: [
            {
                id: 1,
                title: 'Apprendre react',
                completed: false
            },
            {
                id: 2,
                title: 'Apprendre redux toolkit',
                completed: true
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id != action.payload)
        },
        editTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id == action.payload.id)
            if (taskIndex != -1) {
                state.tasks[taskIndex] = action.payload
                state.taskSelected = null
            }
        },
        selectTask: (state, action) => {
            state.taskSelected = state.tasks.find(task => task.id == action.payload)
        },
        toggleTaskState: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id == action.payload)
            if (taskIndex != -1) {
                state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
            }
        }
    }
})


export const { addTask, deleteTask, editTask, selectTask, toggleTaskState } = todoSlice.actions
export default todoSlice.reducer 