import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    font-size: calc(16px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
body {
    color: #fafafa;
}
h1, h2, h3, h4 {
    font-family: 'Trirong', serif;
}
a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 100vw;
    height: 90%;
    display: flex;
    justify-content: flex-end;

}

`;
export default GlobalStyle;
