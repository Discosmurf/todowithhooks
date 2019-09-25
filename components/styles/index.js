import styled, { css } from 'styled-components';
import { TASK_STATUS } from '../../Constants';

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
${props => props.done && css`color: gray;`}
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

export const Card = styled(Column)`
    margin: 10px;
    padding: 10px;
    min-width: 150px;
    min-height: 100px;
    background: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    @media (max-width: 414px) {
        width: 300px;
    }
`
export const Button = styled.button`
    background: black;
    border: none;
    border-radius: 20px;
    color: white;
    padding: 10px 20px;
    margin: 2px 5px;
    font-family: 'ptsans';
    box-sizing: border-box;
    ${props => props.width && css`width: ${props.width};`}
    ${props => props.secondary && 
        css`
            border: 1px solid black; 
            color: black; 
            background: none;
        `
    }
    ${props => props.tertiary && 
        css`
            border: none; 
            color: black; 
            background: none;
        `
    }
    :last-child {
        margin: 2px 0;
    }
    :focus {
        outline: none;
    }
`

export const InputWrapper = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px 5px 20px;
    margin: 20px;
    input {
        border: none;
        height: 30px;
        background: rgba(255, 255, 255, 0);
        :focus {
            outline: none;
        }
    }
    :hover {
        -webkit-box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.3);
    }
`;

export const StatusMarker = styled.div`
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    ${props => props.status === TASK_STATUS.STARTED && 
        css`background: orange;`
    }
    ${props => props.status === TASK_STATUS.DONE && 
        css`background: green;`
    }

`
