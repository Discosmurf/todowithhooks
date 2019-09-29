import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Meta from './Meta.js';
import { PageContent, PageStyle } from './styles';

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


export default ({ children }) => {
    
    return (
    <PageStyle>
        <Meta />
        <GlobalStyle />        
        <Header />
        <PageContent>
            {children}
        </PageContent>
        <Modal />
    </PageStyle>
    )
}