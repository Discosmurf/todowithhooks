import App, { Container } from 'next/app';
import Page from '../components/Page';
import ContextProvider from '../store/ContextProvider';

class MyApp extends App {
    
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }   
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>    
                <ContextProvider>
                    <Page>                        
                        <Component {...pageProps} />                    
                    </Page>       
                </ContextProvider>  
            </Container>
        )
    }
}

export default MyApp;