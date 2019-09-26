import { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Column, Row, Button } from './styles';
import { slideContent } from '../store/Mockdata';
import { TodoContext } from '../store/Context';
import { TODO_ACTIONS } from '../store/Constants';
import Todo from './Todo';

const InfoBoard = styled(Column)`
    width: 49%;
    min-height: 500px;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-left: 1px solid black;
    p {
        font-size: 1rem;
    }
    @media (max-width: 414px) {
        width: 100%;
        border: none;
    }
`

const Content = styled.div`
    flex-grow: 1;
    width: 80%;
    @media (max-width: 414px) {
        width: 90%;
    }
`

const InfoHeading = styled.h1`
    margin: 30px 0;
    ${props => props.align && css`text-align: center;`}
`

const InfoSubHeading = styled.h3`
    margin: 10px 0;
    ${props => props.align && css`text-align: center;`}
    color: gray;
`

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { dispatch } = useContext(TodoContext);
    const handleNext = () => {
        dispatch({
            type: TODO_ACTIONS.UPDATE_TODO,
            searchText: slideContent[currentSlide].heading,
            status: true,
        });
        if (currentSlide < slideContent.length - 1) setCurrentSlide(currentSlide +1);
    }
    const handleBack = () => {
        dispatch({
            type: TODO_ACTIONS.UPDATE_TODO,
            searchText: slideContent[currentSlide].heading,
            status: false,
        });
        if (currentSlide !== 0) setCurrentSlide(currentSlide -1);
    }
    return (
        <InfoBoard>            
            <Content>
            <p>{currentSlide + 1}/{slideContent.length}</p>
            <InfoHeading align={slideContent[currentSlide].alignHeading}>
                {slideContent[currentSlide].heading}
            </InfoHeading>
            <InfoSubHeading align={slideContent[currentSlide].alignHeading}>
                {slideContent[currentSlide].subHeading}
            </InfoSubHeading>
            <ul>
                {slideContent[currentSlide].bullets.map((bullet, k) => <li key={k}>{bullet}</li>)}
            </ul>
            </Content>
            <Row>
                <Button secondary onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
            </Row>
        </InfoBoard>
    )
}

export default Slides;