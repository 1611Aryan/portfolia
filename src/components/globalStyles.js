import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    width:100%;
    background:#1b1b1b;
    overflow-x:hidden;
    font-family: 'Inter', sans-serif;
}
button{
    cursor:pointer;
}
`;

export default GlobalStyle;
