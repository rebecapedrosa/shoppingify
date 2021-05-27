import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FAFAFE;

        --soft-orange:#FFF0DE;
        --strong-orange:#F9A109;

        --blue: #56CCF2;
        --red:#56CCF2;

        --font-title: #34333A;
        --font-body:#000000;
        
        --card: #80485B;


    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Quicksand', sans-serif;
    }

`;
