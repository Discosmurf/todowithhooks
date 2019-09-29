import React, { useContext } from 'react'
import { BoardStyle, TaskBoard, Button } from './styles';
import { TodoContext } from '../store/Context';
import Slides from './Slides';
import Task from './Task';

export default () => {
    const { state: { tasks } } = useContext(TodoContext);
    return (
        <BoardStyle>            
            <TaskBoard>
                {tasks.map((task, k) => task && <Task {...task} taskId={k} key={k} />)}            
            </TaskBoard>
            <Slides />
        </BoardStyle>
    )
};
