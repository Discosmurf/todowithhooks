import { TODO_ACTIONS, TASK_ACTIONS } from './Constants';

export const initialState = {
    tasks: [],
}

export const todoReducer = (draft, { type, taskId, todoId, newItem, status, taskBatch }) => {
    switch (type) {
        case TODO_ACTIONS.CREATE_TODO:
            draft.tasks[taskId].todos.push({ text: newItem, done: false });
            return draft;
        case TODO_ACTIONS.UPDATE_TODO:
            draft.tasks[taskId].todos[todoId].done = status;
            return draft;
        case TASK_ACTIONS.DELETE_TASK:
            delete draft.tasks[taskId];
            return draft;
        case TASK_ACTIONS.CREATE_TASK:
            draft.tasks.push({heading: newItem, todos: []});
            return draft;
        case TASK_ACTIONS.ADD_BATCH_TO_STORE:
            console.log(taskBatch);
            taskBatch.forEach(task => draft.tasks.push(task));
            return draft;
        default:
            return draft;
    }
};
