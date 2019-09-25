import styled, { css } from 'styled-components';
import { TASK_STATUS } from '../../store/Constants';

export const Heading = styled.h3`
    text-align: center;
    font-weight: bold;
`;

export const TodoText = styled.h5`
    margin: 3px;
    ${props => props.done && css`color: gray;`}
`;

export const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 90%;
    margin-bottom: 10px;
`;

export const TodoItem = styled.div`
    display: flex;
    align-items: center;
`;

export const StickToBottom = styled.div`
    position: absolute;
    bottom: 0;
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
`;

export const Card = styled(Column)`
    margin: 10px;
    padding: 10px;
    width: 25%;
    min-height: 100px;
    background: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
    @media (max-width: 414px) {
        width: 80%;
    }
`;

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
`;

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
`;
export const ModalBackground = styled(Column)`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    justify-content: center;
    text-align: center;
    ${props => !props.open && css`display: none;`}
`;

export const BoardStyle = styled.div`
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 100vw;
`

export const TaskBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    @media (max-width: 414px) {
        justify-content: center;
        width: 100%;
    }
`;