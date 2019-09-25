import React, { useState, useReducer, useMemo } from 'react'
import produce from 'immer';
import { TodoContext, ModalContext } from '../store/Context';
import { todoReducer, initialState } from '../store/Reducers';

const ContextProvider = ({ children }) => {
  const immerReducer = produce(todoReducer);
  const [state, dispatch] = useReducer(immerReducer, initialState);

  const [modalOpen, setModalOpen] = useState(false);
  const [dispatchObject, setDispatchObject] = useState({});

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