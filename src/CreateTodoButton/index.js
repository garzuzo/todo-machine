import './CreateTodoButton.css';
import { IoAddCircleOutline } from "react-icons/io5";
function CreateTodoButton({ setOpenModal }) {
  return (
    <IoAddCircleOutline className="addButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      } />

  );
}

export { CreateTodoButton };