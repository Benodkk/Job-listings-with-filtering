import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    font-size: 15px;
    font-family: League Spartan, Arial, Helvetica, sans-serif;
}
body{
    min-height: 100vh;
    min-width: 100%;
    background-color: hsl(180, 52%, 96%);
}
button{
    font-size: 15px;
    font-family: League Spartan, Arial, Helvetica, sans-serif;
}
`;
