import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledHeaderBackground = styled.div`
    ${props =>
        props.fixed ? css` position: fixed; ` : css`position: absolute;`
    }
    width: 100%;
    height: 70px;
    top: 0;
    padding: 0;
    z-index: 1;
    background: white;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
    -webkit-backface-visibility: hidden;

    ${props => 
        props.transparent ? 
        css`
            opacity: 0;
        `
        :
        css`
            opacity: 1;
            -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.25);
        `
    }

    @media (max-width: 414px) {
        height: 55px;
    }

    @media (max-width: 320px) {
        height: 50px;
    }

`

export const HeaderItem = styled.div`

    ${props => 
        props.color && css`color: ${props.color};`
    }
    padding: 5px 20px;
    text-align: center;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    h3, h5 {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 414px) {
        padding: 3px 5px;
        h3, h5 {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 320px) {
        padding: 3px 5px;
        h3, h5 {
            font-size: 0.5rem;
        }
    }
`

export const Nav = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 20px;
`

export const StyledHeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 2;
`

export const StyledHeader = styled.div`
    ${props =>
        props.fixed ? css` position: fixed; ` : css`position: absolute;`
    }
    width: 100%;
    top: 0;
    padding: 0;
    z-index: 2;
    background: none;
    
    img {
        height: 50px;

        @media (max-width: 375px) {
            height: 40px;
        }

        @media (max-width: 320px) {
            height: 30px;
        }
    }


    @media (max-width: 1300px) {
      padding: 10px;
    }

    @media (max-width: 414px) {
      padding: 5px;
    }

    @media (max-width: 320px) {
      padding: 2px;
    }
`