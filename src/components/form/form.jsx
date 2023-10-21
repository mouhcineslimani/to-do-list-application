import './form.css'
import add from './icons/plus.png'
import edit from '../task/icons/editer.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addTask, editTask } from '../store/reducers/todoSlice'

export default function Form() {
    const { tasks, myDefaultTask, taskSelected } = useSelector(state => state.todo)

    const dispatch = useDispatch()
    const [task, setTask] = useState(myDefaultTask)
    const [errorMsg, setErrorMsg] = useState('')
    const taskChangeHandler = (event) => {
        const task = {
            id: taskSelected != null ? taskSelected.id : (tasks !== null || tasks !== undefined ? tasks.length + 1 : 1),
            title: event.target.value,
            completed: taskSelected != null ? taskSelected.completed : false
        }
        setTask(task)
    }

    useEffect(() => {
        if (taskSelected != null && taskSelected != undefined)
            setTask(taskSelected)
    }, [taskSelected])

    const addHandler = () => {
        if (task.title != '') {
            dispatch(addTask(task))
            setTask(myDefaultTask)
            setErrorMsg('')
        }
        else setErrorMsg("Vous n'avez pas saisi le nom de tache !!!")
    }

    const editHandler = () => {
        dispatch(editTask(task))
        setTask(myDefaultTask)
    }

    return (
        <>
            {
                errorMsg != ''
                &&
                <div className='form-error-message'>
                    {errorMsg}
                </div>
            }
            <div className='form-container'>
                <input type="text" placeholder='Input task name' value={task.title} className='task-input-form' onChange={taskChangeHandler} />
                {
                    taskSelected == null || taskSelected == undefined ?
                        <img src={add} alt="Add" className='task-img-form' onClick={addHandler} />
                        :
                        <img src={edit} alt="Edit" className='task-img-form' onClick={editHandler} />

                }
            </div>
        </>
    )
}
