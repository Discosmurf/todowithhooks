import React, { useEffect, useState, useReducer, useMemo } from 'react'
import produce from 'immer';
import { TodoContext, ModalContext } from '../store/Context';
import { todoReducer, initialState } from '../store/Reducers';
import { TASK_ACTIONS } from './Constants';
import { fetchDataFromServer } from '../store/Mockdata';

const ContextProvider = ({ children }) => {
  const immerReducer = produce(todoReducer);
  const [state, dispatch] = useReducer(immerReducer, initialState);

  const [modalOpen, setModalOpen] = useState(false);
  const [dispatchObject, setDispatchObject] = useState({});

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

  const todoCtxValue = useMemo(() => { 
    return { state, dispatch } 
  }, [state, dispatch]);

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