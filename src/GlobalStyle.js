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
    height: 90vh;
    display: flex;
}
@media screen and (max-width: 768px) { 
    .container {
    ${'' /* height: 100vh; */}
}

}
`;
export default GlobalStyle;
