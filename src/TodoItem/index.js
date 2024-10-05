import './TodoItem.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
function TodoItem({ title, completed, onComplete, onDelete }) {
  return (
    <li className='listItem'>
      <CompleteIcon
      completed={completed}
      onComplete={onComplete}/>
      {/*<FaCheck
        className={`${completed ? 'check--complete' : 'check'}`}
        onClick={onComplete} /> */}
        
      <p className={`${completed ? "TodoItem-p--complete" : "TodoItem-p"}`}>{title}</p>
      {/*<MdDelete 
      className="delete"
      onClick={onDelete} />*/}
    <DeleteIcon onDelete={onDelete}/>
    </li>
  );
}
export { TodoItem }