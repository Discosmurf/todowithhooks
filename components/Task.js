import React, { useMemo, useContext } from 'react';
import Todo from './Todo';
import { Heading, Card, TodoList, Button, StatusMarker } from './styles';
import { ModalContext, TodoContext } from '../Context';
import { TODO_ACTIONS, TASK_ACTIONS, TASK_STATUS } from '../Constants';

const Task = ({ heading, todos, taskId }) => {
    const { setModalOpen, setDispatchObject } = useContext(ModalContext);
    const { dispatch } = useContext(TodoContext);

    const taskStatus = useMemo(() => {
        let status = TASK_STATUS.NOT_STARTED;
        const total = todos.length;
        const done = todos.filter(todo => todo.done);
        if (done.length > 0) status = done.length < total ? TASK_STATUS.STARTED : TASK_STATUS.DONE;
        return status;
    }, [todos]);

    const getTaskStatus = () => {
        let status = TASK_STATUS.NOT_STARTED;
        const total = todos.length;
        const done = todos.filter(todo => todo.done);
        if (done > 0) status = done < total ? TASK_STATUS.STARTED : TASK_STATUS.DONE;
        return status;
    }

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
            <StatusMarker status={taskStatus} />
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