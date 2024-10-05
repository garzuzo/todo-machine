import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';
function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  
  return (
    completedTodos == totalTodos && completedTodos > 0 ?
      <h1>
        CONGRATULATIONS.<br /> YOU COMPLETED ALL YOUR TODOS! 🥳
      </h1>
      :
      <h1>

        You completed <span>{completedTodos} </span>
        of <span>{totalTodos}</span> TODOs
      </h1>
  );
}

export { TodoCounter };