import React, { useEffect, useState, useReducer, useMemo } from 'react'
import produce from 'immer';
import { TodoContext, ModalContext } from '../store/Context';
import { todoReducer, initialState } from '../store/Reducers';
import { TASK_ACTIONS, TASK_STATUS } from './Constants';
import { fetchDataFromServer } from '../store/Mockdata';

const ContextProvider = ({ children }) => {
  const immerReducer = produce(todoReducer);
  const [state, dispatch] = useReducer(immerReducer, initialState);

  const [modalOpen, setModalOpen] = useState(false);
  const [dispatchObject, setDispatchObject] = useState({});

  // Mock example of fetching data from a server (See /components/Slides for a real example fetching static data from Sanity)
  useEffect(() => {
    const fetchData = async () => {
        const data = await fetchDataFromServer();
        dispatch({
            type: TASK_ACTIONS.ADD_BATCH_TO_STORE,
            taskBatch: data.tasks,
        });
    };
    fetchData();
  }, []);

  // Example of emulating reselect-like behavior using useMemo
  const selectTaskCount = useMemo(() => {
    let count = {
        notStarted: 0,
        started: 0,
        done: 0,
    }
    state.tasks.forEach(task  => {
        if (task.status === TASK_STATUS.NOT_STARTED) count.notStarted ++;
        if (task.status === TASK_STATUS.STARTED) count.started ++;
        if (task.status === TASK_STATUS.DONE) count.done ++;
    });
    return count;
}, [state.tasks]);

  // state and dispatch are memoized in order to prevent respawn in case parent components are rerendered.
  const todoCtxValue = useMemo(() => { 
    return { state, dispatch, selectors: { selectTaskCount } } 
  }, [state, dispatch]);

  // This context value is composed of different useState instances for use in modal dialogs
  const modalCtxValue = {modalOpen, setModalOpen, dispatchObject, setDispatchObject};

  return (
      <ModalContext.Provider value={modalCtxValue}>
        <TodoContext.Provider value={todoCtxValue}>
          {children}
        </TodoContext.Provider>
      </ModalContext.Provider>
  )
}

export default ContextProvider;