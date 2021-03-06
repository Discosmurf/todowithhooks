import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../store/Context';
import { TASK_ACTIONS } from '../store/Constants';
import { Button, CollapseForMobile } from './styles';
import { StyledHeaderWrapper, StyledHeaderBackground, StyledHeader, ItemWrapper, HeaderItem, Nav } from './styles/HeaderStyles';
import TaskCounter from './TaskCounter';

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
            prompt: 'Legg til ny oppgave',
        })
        setModalOpen(true);
    }
    
    // useEffect used to add and remove listener for scroll
    useEffect(() => {
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
                <Nav>
                <HeaderItem>
                    <Link href="/">
                        <h3>OPPGAVER</h3>
                    </Link>
                </HeaderItem>            
                <CollapseForMobile>
                        <TaskCounter />
                </CollapseForMobile>
                </Nav>
                <Nav>       
                    <HeaderItem>
                        <Link href="/about">
                            <h5>OM DENNE APPEN</h5>
                        </Link>     
                    </HeaderItem>                           
                    <HeaderItem>
                        <Button onClick={handleOpenModal}>LEGG TIL OPPGAVE</Button>
                    </HeaderItem>
                </Nav>
            </ItemWrapper>
            
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}
