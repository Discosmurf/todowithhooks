import styled, { css } from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../Context';
import { TASK_ACTIONS } from '../Constants';

export default () => {
    const [ headerTransparent, setHeaderTransparent ] = useState(true);
    const { setModalOpen, setDispatchObject } = useContext(ModalContext);

    const handleScroll = () => {

        if(window.pageYOffset > 40) {
            setHeaderTransparent(false);
        }
        else
            setHeaderTransparent(true);
    };

    const handleOpenModal = () => {
        setDispatchObject({
            type: TASK_ACTIONS.CREATE_TASK,
            prompt: 'Add new task',
        })
        setModalOpen(true);
    }
    
    useEffect(() => {
        //handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <StyledHeaderWrapper>
        <StyledHeaderBackground transparent={headerTransparent} />  
        <StyledHeader>
            <ItemWrapper>
                <HeaderItem>
                    <h3>TASK BOARD</h3>
                </HeaderItem>
                <HeaderItem>
                    <button onClick={handleOpenModal}>Add new task</button>
                </HeaderItem>
            </ItemWrapper>
            
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

const StyledHeaderBackground = styled.div`
    ${props =>
        props.fixed ? css` position: fixed; ` : css`position: absolute;`
    }
    width: 100%;
    height: 70px;
    top: 0;
    padding: 0;
    z-index: 1;
    background: white;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    -webkit-backface-visibility: hidden;

    ${props => 
        props.transparent ? 
        css`
            opacity: 0;
        `
        :
        css`
            opacity: 1;
        `
    }

    @media (max-width: 375px) {
        height: 60px;
    }

    @media (max-width: 320px) {
        height: 50px;
    }

`

const HeaderItem = styled.div`

    ${props => 
        props.color && css`color: ${props.color};`
    }
    padding: 5px 20px;
    text-align: center;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const StyledHeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 2;
`

const StyledHeader = styled.div`
    ${props =>
        props.fixed ? css` position: fixed; ` : css`position: absolute;`
    }
    width: 100%;
    top: 0;
    padding: 0;
    z-index: 2;
    background: none;
    
    img {
        height: 50px;

        @media (max-width: 375px) {
            height: 40px;
        }

        @media (max-width: 320px) {
            height: 30px;
        }
    }


    @media (max-width: 1300px) {
      padding: 10px;
    }

    @media (max-width: 414px) {
      padding: 5px;
    }

    @media (max-width: 320px) {
      padding: 2px;
    }
`
