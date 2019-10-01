import Link from 'next/link';
import groq from 'groq';
import styled from 'styled-components';
import client from '../store/static/client';
import Slide from '../components/Slide';
import { Content } from '../components/styles/SlideStyle';
import { Button } from '../components/styles';

const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 50px;
    position: absolute;
`

const slideQuery = groq`
    *[_type == "slide" && title == "Om"]
`

const About = ({ slide }) => (
    <AboutStyle>
        <Content width="60%">
            <Slide content={slide} />
            <Link href="/">
                <Button>Tilbake</Button>
            </Link>
        </Content>        
    </AboutStyle>
);

About.getInitialProps = async () => {
    
    const res = await client.fetch(slideQuery, {});
    console.log(res);

    return {
        slide: res[0],
    }
};

export default About;