import styled from 'styled-components';
import { Column } from '../styles';

export const InfoBoard = styled(Column)`
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

export const Content = styled.div`
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

    li {
        font-size: 1rem;
    }

    code {
        background: lightgray;
        padding: 3px;
        border-radius: 3px;
    }
`