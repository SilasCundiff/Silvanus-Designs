import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 100vw;
    height: 85vh;
    padding-top: 15vh;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    /* background-color: red; */
}

`;
export default GlobalStyle;
