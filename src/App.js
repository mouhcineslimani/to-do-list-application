import './App.css';
import Form from './components/form/form';
import TaskList from './components/task-list/task-list';

function App() {
  return (
    <div className="App">
      <div className='header'>To Do List Application</div>
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
