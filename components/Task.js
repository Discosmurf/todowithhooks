import React, { useMemo, useContext } from 'react';
import Todo from './Todo';
import { Heading, Card, TodoList, Button, StatusMarker, StickToBottom } from './styles';
import { ModalContext, TodoContext } from '../store/Context';
import { TODO_ACTIONS, TASK_ACTIONS, TASK_STATUS } from '../store/Constants';

const Task = ({ heading, todos, taskId }) => {
    const { setModalOpen, setDispatchObject } = useContext(ModalContext);
    const { dispatch } = useContext(TodoContext);

    const taskStatus = useMemo(() => {
        let status = TASK_STATUS.NOT_STARTED;
        const total = todos.length;
        const done = todos.filter(todo => todo.done);
        if (done.length > 0) status = done.length < total ? TASK_STATUS.STARTED : TASK_STATUS.DONE;
        dispatch({
            type: TASK_ACTIONS.UPDATE_STATUS,
            taskId,
            taskStatus: status,
        })
        return status;
    }, [todos]);

    const handleOpenModal = () => {
        setDispatchObject({
            type: TODO_ACTIONS.CREATE_TODO,
            taskId,
            prompt: 'Legg til ny ToDo',
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
        <Card>
            <StatusMarker status={taskStatus} />
            <Heading>{heading}</Heading>
            <TodoList>
                {todos.map((todo, k) => <Todo {...todo} todoId={k} taskId={taskId} key={k} />)}
            </TodoList>
            <Button width="100%" onClick={handleOpenModal}>Legg til ToDo</Button>
            <Button width="100%" tertiary onClick={handleDelete}>Slett</Button>
        </Card>
    )
}

export default Task;