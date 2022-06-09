import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --black: #212121;
        --fullBlack: #000000;
        --lightBlack: #121212;
        --white: #FFFFFF;
        --green: #1ED760;
    }

     * {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
 `;
