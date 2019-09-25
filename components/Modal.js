import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Row, InputWrapper, ModalBackground } from './styles';
import { TodoContext, ModalContext } from '../store/Context';

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
                <InputWrapper>
                    <input type="text" value={inputValue} onChange={handleChange} />
                </InputWrapper>
                <Row>
                    <Button onClick={handleSubmit} disabled={inputValue === ''}>Add</Button>
                    <Button secondary onClick={handleClose}>Cancel</Button>
                </Row>
            </Card>
        </ModalBackground>
    )
};

export default Modal;