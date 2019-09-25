import styled, { css } from 'styled-components';

export const Heading = styled.h3`
    text-align: center;
    font-weight: bold;
`

export const TodoList = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`

export const TodoText = styled.h5`
${props => props.done && css`text-decoration: line-through;`}
`

export const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    ${props => props.wrap && css`flex-wrap: wrap;`}
    ${props => props.justify && css`justify-content: ${props.justify};`}
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Card = styled.div`
    margin: 10px;
    padding: 10px;
    min-width: 150px;
    min-height: 100px;
    background: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
`