 import { createGlobalStyle } from "styled-components";
 import reset from "styled-reset";
 
 const globalStyles = createGlobalStyle`
     ${reset};
     @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
        font-family: 'HakgyoansimWoojuR';
        box-sizing:border-box;
     }
     body{
        font-family: 'HakgyoansimWoojuR';
         font-size: 14px;
         background-color:rgba(255,255,255,1);
     }
 `;

 export default globalStyles;