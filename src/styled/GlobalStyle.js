import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik');
 body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik';
    
}
a {
    text-decoration:none;
}
li {
    list-style: none;
}
div{
    padding:0.5em 1em ;
}
*:focus {
    outline: none;
}

`;
export default GlobalStyle;
