import styled, { createGlobalStyle } from 'styled-components';
import Meta from './Meta.js';

const PageStyle = styled.div`
    overflow-x: hidden;
    max-width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
    
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        max-width: 100vw;
        font-family: 'ptsans';
        font-weight: 100;

    }

    html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        max-width: 100vw;
    }
`


export default props => {
    
    return (
    <PageStyle>
        <Meta />
        <GlobalStyle />
        {props.children}
    </PageStyle>
    )
}