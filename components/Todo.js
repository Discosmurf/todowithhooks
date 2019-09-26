import React, { useContext } from 'react';
import { TodoContext } from '../store/Context';
import { TODO_ACTIONS } from '../store/Constants';
import { TodoItem, TodoText } from './styles';

const Todo = ({ text, done, taskId, todoId }) => {
    const { dispatch } = useContext(TodoContext);
    const handleChange = () => {
        console.log('ferwig');
        dispatch({
            type: TODO_ACTIONS.UPDATE_TODO,
            taskId,
            todoId,
            status: !done,
        });
    };
    return (
        <TodoItem>
            <input type="checkbox" onChange={handleChange} checked={done} />
            <TodoText done={done}>{text}</TodoText>
        </TodoItem>
    )
};

export default Todo;