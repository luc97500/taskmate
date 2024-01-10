import { useState } from 'react';
import { TaskCard } from './TaskCard';//no default used so use {}
import {BoxCard} from './BoxCard'

export const TaskList = ({info}) => {//info popdrilling passing data from multiple components.
    let obj = [
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]
    const [tasks, setTasks] = useState(obj);
    const [show, setShow] = useState(true);

    
    function Tasklist() {
        setShow(true)
        setTasks(obj)
    }
    
    
    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <div className='tasklist'>
        <h1>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>TOGGLE to hide all</button>
            <button className='trigger' onClick={()=> Tasklist() }>RESET To Initial state</button>
             { show && tasks.map((task) => (
                <TaskCard key={task.id} info = {info} task={task} handleDelete={handleDelete} />// task and handleDelete passed as the Props.
            )) }
        </ul>
        <BoxCard result = "success">
            <p className="title">Lorem ipsum dolor sit </p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, a.</p>
        </BoxCard>

        <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, in!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima illo.</p>
        </BoxCard>
    </div>
  )
}