import React, { useContext, useEffect } from 'react'
import { BoardStyle, TaskBoard } from './styles';
import { TodoContext } from '../store/Context';
import SlideShow from './SlidesShow';
import Task from './Task';

export default () => {
    const { state: { tasks } } = useContext(TodoContext);
    return (
        <BoardStyle>            
            <TaskBoard>
                {tasks.map((task, k) => task && <Task {...task} taskId={k} key={k} />)}            
            </TaskBoard>
            <SlideShow />
        </BoardStyle>
    )
};
