import { useState, useEffect, useContext } from 'react';
import groq from 'groq';
import { Row, Button } from './styles';
import { InfoBoard, Content } from './styles/SlideStyle';
import client from '../store/static/client';
import { TodoContext } from '../store/Context';
import { TODO_ACTIONS } from '../store/Constants';
import SimpleBlockContent from './SimpleBlockContent';

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
