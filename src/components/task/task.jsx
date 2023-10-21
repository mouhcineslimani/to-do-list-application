import { useDispatch, useSelector } from 'react-redux'
import edit from './icons/editer.png'
import remove from './icons/supprimer.png'
import './task.css'
import { deleteTask, selectTask, toggleTaskState } from '../store/reducers/todoSlice'

export default function Task(props) {
    const task = props.myTask
    const dispatch = useDispatch()
    const { taskSelected } = useSelector(state => state.todo)

    const editHandler = (event) => {
        dispatch(selectTask(event.target.id))
    }

    const removeHandler = (event) => {
        dispatch(deleteTask(event.target.id))
    }
    const toggleState = (event) => {
        dispatch(toggleTaskState(event.target.id))
    }
    return (
        <div className='task-container'>
            <div className={task.completed ? 'task-title task-completed' : 'task-title'} id={task.id} onClick={toggleState}>
                {task.title}
            </div>
            <div className='task-actions'>
                {
                    taskSelected == null || taskSelected == undefined ?
                        <img className='icon' src={edit} alt="Edit" id={task.id} onClick={editHandler} />
                        :
                        null
                }
                <img className='icon' src={remove} alt="Remove" id={task.id} onClick={removeHandler} />

            </div>
        </div >
    )
}
