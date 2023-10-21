import React from 'react'
import './task-list.css'
import Task from '../task/task'
import { useSelector } from 'react-redux'
import NotFound from '../not-found/NotFound'
export default function TaskList() {
    const tasks = useSelector(state => state.todo.tasks)
    return (
        <div className='task-list-container'>
            {
                tasks != undefined && tasks.length != 0 ? tasks.map((task) => <Task key={task.id} myTask={task} />) : <NotFound />
            }
        </div>
    )
}
