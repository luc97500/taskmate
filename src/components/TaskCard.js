import './taskCard.css';

export const TaskCard = ({ task, handleDelete,info }) => {//byusing{} we not need to pass props continuously
    return (
      <div className='taskCard'>
        <li className={`{task.completed ? "completed" : "incomplete"}`}>
          <span>
            {task.id} - {task.name} - {info}
          </span>
          <button onClick={() => handleDelete(task.id)} className="delete">
            Delete
          </button>
        </li>
      </div>
    );
  }