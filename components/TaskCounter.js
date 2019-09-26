import { useContext, useMemo } from 'react';
import { Row, StatusMarker } from './styles';
import { TASK_STATUS } from '../store/Constants';
import { TodoContext } from '../store/Context';

const TaskCounter = () => {
    const { state: { tasks } } = useContext(TodoContext);

    const taskCount = useMemo(() => {
        let count = {
            notStarted: 0,
            started: 0,
            done: 0,
        }
        tasks.forEach(task  => {
            if (task.status === TASK_STATUS.NOT_STARTED) count.notStarted ++;
            if (task.status === TASK_STATUS.STARTED) count.started ++;
            if (task.status === TASK_STATUS.DONE) count.done ++;
        });
        return count;
    }, [tasks]);

    return (
        <Row>
            {taskCount && (
                <>
                    {taskCount.notStarted}
                    <StatusMarker status={TASK_STATUS.NOT_STARTED} />
                    {taskCount.started}
                    <StatusMarker status={TASK_STATUS.STARTED} />
                    {taskCount.done}
                    <StatusMarker status={TASK_STATUS.DONE} />
                </>
            )}
        </Row>
    );
};

export default TaskCounter;
