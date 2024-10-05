import { TodoProvider } from '../TodoContext';
import './App.css'

import { AppUI } from './AppUI';
import React from 'react';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}


export { App };
