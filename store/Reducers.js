import { TODO_ACTIONS, TASK_ACTIONS } from './Constants';

export const initialState = {
    tasks: [],
}

export const todoReducer = (draft, { type, taskId, searchText, todoId, newItem, status, taskStatus, taskBatch }) => {
    switch (type) {
        case TODO_ACTIONS.CREATE_TODO:
            draft.tasks[taskId].todos.push({ text: newItem, done: false });
            return draft;
        case TODO_ACTIONS.UPDATE_TODO:
            if (searchText) {
              draft.tasks.forEach(task => task.todos.forEach(todo => {
                if (todo.text === searchText) todo.done = status;
              }));
            } else draft.tasks[taskId].todos[todoId].done = status;
            return draft;
        case TASK_ACTIONS.DELETE_TASK:
            delete draft.tasks[taskId];
            return draft;
        case TASK_ACTIONS.CREATE_TASK:
            draft.tasks.push({heading: newItem, todos: []});
            return draft;
        case TASK_ACTIONS.UPDATE_STATUS:
            draft.tasks[taskId].status = taskStatus;
            return draft;
        case TASK_ACTIONS.ADD_BATCH_TO_STORE:
            taskBatch.forEach(task => draft.tasks.push(task));
            return draft;
        default:
            return draft;
    }
};
