import { useState } from 'react';
import styled from 'styled-components';
import { Column, Row, Button } from './styles';
import { slideContent } from '../store/Mockdata';

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
`

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNext = () => {
        if (currentSlide < slideContent.length - 1) setCurrentSlide(currentSlide +1);
    }
    const handleBack = () => {
        if (currentSlide !== 0) setCurrentSlide(currentSlide -1);
    }
    return (
        <InfoBoard>
            <Row>
                <Button secondary onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
            </Row>
            <Content>
            <p>{currentSlide + 1}/{slideContent.length}</p>
            <InfoHeading>
                {slideContent[currentSlide].heading}
            </InfoHeading>
            <ul>
                {slideContent[currentSlide].bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
            </Content>
        </InfoBoard>
    )
}

export default Slides;