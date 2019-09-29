import { useContext } from 'react';
import { Row, StatusMarker } from './styles';
import { TASK_STATUS } from '../store/Constants';
import { TodoContext } from '../store/Context';

const TaskCounter = () => {
    const { selectors: { selectTaskCount } } = useContext(TodoContext);
    
    return (
        <Row>
            {selectTaskCount && (
                <>
                    {selectTaskCount.notStarted}
                    <StatusMarker status={TASK_STATUS.NOT_STARTED} />
                    {selectTaskCount.started}
                    <StatusMarker status={TASK_STATUS.STARTED} />
                    {selectTaskCount.done}
                    <StatusMarker status={TASK_STATUS.DONE} />
                </>
            )}
        </Row>
    );
};

export default TaskCounter;
