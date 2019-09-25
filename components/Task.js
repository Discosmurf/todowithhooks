import React, { useContext } from 'react';
import Todo from './Todo';
import { Heading, Card, TodoList, Button } from './styles';
import { ModalContext, TodoContext } from '../Context';
import { TODO_ACTIONS, TASK_ACTIONS } from '../Constants';

const Task = ({ heading, todos, taskId }) => {
    const { setModalOpen, setDispatchObject } = useContext(ModalContext);
    const { dispatch } = useContext(TodoContext);

    const handleOpenModal = () => {
        setDispatchObject({
            type: TODO_ACTIONS.CREATE_TODO,
            taskId,
            prompt: 'Add new todo',
        });
        setModalOpen(true);
    };
    const handleDelete = () => {
        dispatch({
            type: TASK_ACTIONS.DELETE_TASK,
            taskId,
        })
    }
    return (
        <Card growForMobile>
            <Heading>{heading}</Heading>
            <TodoList>
                {todos.map((todo, k) => <Todo {...todo} todoId={k} taskId={taskId} key={k} />)}
            </TodoList>
            <Button width="100%" onClick={handleOpenModal}>Add</Button>
            <Button width="100%" tertiary onClick={handleDelete}>Delete</Button>
        </Card>
    )
}

export default Task;