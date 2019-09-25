import React, { useState, useEffect, useReducer, useMemo } from 'react'
import produce from 'immer';
import { TodoContext, ModalContext } from '../Context';
import { todoReducer, initialState } from '../Reducers';
import Board from '../components/Board';
import Modal from '../components/Modal';
import Header from '../components/Header';

const Home = () => {
  const immerReducer = produce(todoReducer);
  const [state, dispatch] = useReducer(immerReducer, initialState);

  const [modalOpen, setModalOpen] = useState(false);
  const [dispatchObject, setDispatchObject] = useState({});

  const todoCtxValue = useMemo(() => { 
    return { state, dispatch } 
  }, [state, dispatch]);

  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);

  const modalCtxValue = {modalOpen, setModalOpen, dispatchObject, setDispatchObject};

  return (
      <ModalContext.Provider value={modalCtxValue}>
        <TodoContext.Provider value={todoCtxValue}>
          <Header />
          <Board />
          <Modal />
        </TodoContext.Provider>
      </ModalContext.Provider>
  )
}

export default Home;
