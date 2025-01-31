import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Ownglyph_wiseelist-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2501-1@1.1/Ownglyph_wiseelist-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
html{
    font-size: 18px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ownglyph_wiseelist-Rg';
}
a{
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
`