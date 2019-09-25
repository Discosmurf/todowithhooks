import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Column, Card } from './styles';
import { TodoContext, ModalContext } from '../Context';

const ModalBackground = styled(Column)`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    justify-content: center;
    ${props => !props.open && css`display: none;`}
`
const Modal = () => {
    const [inputValue, setInputValue] = useState('');
    const { modalOpen, setModalOpen, dispatchObject: { prompt, ...dispatchObject }} = useContext(ModalContext);
    const { dispatch } = useContext(TodoContext);

    useEffect(() => {
        setInputValue('');
    }, [modalOpen]);

    const handleClose = () => {
        setModalOpen(false);
    }

    const handleSubmit = () => {
        dispatch({...dispatchObject, newItem: inputValue});
        handleClose();
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    return (
        <ModalBackground open={modalOpen}>
            <Card>
                <h5>{prompt}</h5>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit} disabled={inputValue === ''}>Add</button>
                <button onClick={handleClose}>Cancel</button>
            </Card>
        </ModalBackground>
    )
};

export default Modal;