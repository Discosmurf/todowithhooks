import React, { useContext } from 'react';
import Todo from './Todo';
import { Heading, Card, TodoList } from './styles';
import { ModalContext } from '../Context';
import { TODO_ACTIONS } from '../Constants';

const Task = ({ heading, todos, taskId }) => {
    const { setModalOpen, setDispatchObject } = useContext(ModalContext);
    const handleOpenModal = () => {
        setDispatchObject({
            type: TODO_ACTIONS.CREATE_TODO,
            taskId,
            prompt: 'Add new todo',
        });
        setModalOpen(true);
    }
    return (
        <Card>
            <Heading>{heading}</Heading>
            <TodoList>
                {todos.map((todo, k) => <Todo {...todo} todoId={k} taskId={taskId} key={k} />)}
            </TodoList>
            <button onClick={handleOpenModal}>Add</button>
        </Card>
    )
}

export default Task;