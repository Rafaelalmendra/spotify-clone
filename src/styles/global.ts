import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --black: #000000;
        --blackPrimary: #121212;
        --blackSecondary: #212121;
        --blackTertiary: #181818;
        --blackQuaternary: #131313;
        --blackQuinary: #0A0A0A;
        
        --white: #FFFFFF;
        
        --gray: #B3B3B3;
        --grayPrimary: #363636;
        --graySecondary: #282828;
        --grayTertiary: #3E3E3E;
        --grayQuartenary: #303030;
        
        --green: #1ED760;
    }

     * {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'DM Sans', sans-serif;
    }
 `;
