import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    background-color: #2a2a2a;
    color: #fafafa;
    font-size: calc(16px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
h1, h2, h3, h4 {
    font-family: 'Trirong', serif;
}
a {
    text-decoration: none;
    color: inherit;
}
`;
export default GlobalStyle;
