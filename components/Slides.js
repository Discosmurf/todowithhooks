import { useState, useEffect, useContext } from 'react';
import groq from 'groq';
import styled, { css } from 'styled-components';
import { Column, Row, Button } from './styles';
import client from '../store/static/client';
import { TodoContext } from '../store/Context';
import { TODO_ACTIONS } from '../store/Constants';
import SimpleBlockContent from './SimpleBlockContent';

const InfoBoard = styled(Column)`
    width: 49%;
    min-height: 500px;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-left: 1px solid black;
    margin-bottom: 70px;
    p {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        width: 100%;
        border: none;
    }

    @media (max-width: 414px) {
        font-size: 1rem;
    }
`

const Content = styled.div`
    flex-grow: 1;
    width: 80%;

    h1 {
        margin: 30px 0;
        text-align: center;
    }

    h4 {
        margin: 10px 0;
        color: gray;
        text-align: center;
    }

    h5 {
        text-align: center;
    }

    @media (max-width: 414px) {
        width: 90%;
    }
`

const slideQuery = groq`
    *[_type == "slideShow" && title == "Hooks"]
`

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideContent, setSlideContent] = useState([]);
    const { dispatch } = useContext(TodoContext);

    useEffect(() => {
        async function fetchData() { 
            const res = await client.fetch(slideQuery, {});
            setSlideContent(res[0].content);
        }     
        fetchData();
    }, []);

    const handleNext = () => {
        dispatch({
            type: TODO_ACTIONS.UPDATE_TODO,
            searchText: slideContent[currentSlide].title,
            status: true,
        });
        if (currentSlide < slideContent.length - 1) setCurrentSlide(currentSlide +1);
    }
    const handleBack = () => {
        dispatch({
            type: TODO_ACTIONS.UPDATE_TODO,
            searchText: slideContent[currentSlide].title,
            status: false,
        });
        if (currentSlide !== 0) setCurrentSlide(currentSlide -1);
    }
    return (
        <InfoBoard>        
            {slideContent.length > 0 &&
                (<>
                    <Content>
                    <p>{currentSlide + 1}/{slideContent.length}</p>
                    <SimpleBlockContent blocks={slideContent[currentSlide].body} />
                    </Content>
                    <Row>
                        <Button secondary onClick={handleBack}>Back</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </Row>
                </>)
            }
        </InfoBoard>
    )
}

export default Slides;
