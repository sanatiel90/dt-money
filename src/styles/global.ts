import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
    /*variaveis do css*/
    :root { 
        --background: #f0f2f5; 
        --red: #e52e40;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363fsf;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        //usando media querys para responsividade de fonte (o padrao do documento é 16px de font-size)
        @media(max-width: 1080px){
            font-size: 93.75%; //equivale a 15px 
        }

        @media(max-width: 720px){
            font-size: 87.5%; //equivale a 14px
        }
    }


    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;    
    }


    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    //classes para serem aplicadas aos modais da app; vao sobrescrever as classes nativas do react-modal
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5); //fundo escuro do modal

        position: fixed; //pra sempre ficar fixo na tela
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }   
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 1s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`;

