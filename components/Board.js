import React, { useContext } from 'react'
import styled from 'styled-components';
import { TodoContext } from '../Context';
import Task from './Task';

const TaskBoard = styled.div`
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100vw;
    @media (max-width: 414px) {
        justify-content: center;
    }
`;

const Board = () => {
    const { state: { tasks } } = useContext(TodoContext);
    return (
        <TaskBoard>
            {tasks.map((task, k) => task && <Task {...task} taskId={k} key={k} />)}            
        </TaskBoard>
    )
};

export default Board;