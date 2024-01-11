import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";

export const TaskList = ({tasks, setTasks}) => {
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function clearAll(){
      setTasks([])
    }

  return (
    <section className='tasklist'>
      <button onClick={clearAll} className='taskiist'>CLEAR All Tasks Added</button>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
            </div>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
    </section>
  )
}