import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';
function AppUI() {
    const { searchedTodos, completeTodo, deleteTodo, loading, error, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <div className="main">
            <TodoCounter />

            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {!loading && searchedTodos.length === 0 && <EmptyTodos />}
                {searchedTodos
                    .map(todo => (
                        <TodoItem
                            key={todo.title}
                            title={todo.title}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.title)}
                            onDelete={() => deleteTodo(todo.title)} />
                    ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </div>
    );
}
export { AppUI };