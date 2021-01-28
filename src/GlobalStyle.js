import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
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
    height: 90vh;
    display: flex;
}


`;
export default GlobalStyle;
