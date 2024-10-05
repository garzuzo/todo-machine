import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    console.log('searching:' + searchValue);

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const addTodo = (text) => {
        saveTodos([...todos, { title: text, completed: false }]);
    }

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos
        .filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(x => x.title === title);
        console.log(todoIndex)
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(x => x.title === title);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    console.log('log 1');

    React.useEffect(() => {
        console.log('log 2');
    }, [totalTodos]);
    console.log('log 3');

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };