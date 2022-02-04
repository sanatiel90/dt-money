import styled from "styled-components";
import { darken, transparentize } from 'polished' //lib para manipular cores

export const FormContainer = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        //todo input a partir do segundo...
        & + input {
            margin-top: 1rem;
        }        
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1rem;

        transition: filter 1s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;  //duas celulas de grid
    gap: 0.5rem;
`;

//definindo tipos de propriedades de um styled component; primeiro define o tipo normalmento do typescript
interface RadioBoxButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

//objeto com as cores q podem ser recebidos na prop activeColor
const colors = {
    green: '#33cc95',
    red: '#e52e40'
}

//depois usa o tipo entre <> no elemento html q sera usado no styled component
export const RadioBoxButton = styled.button<RadioBoxButtonProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    //quando se passa uma funcao () => {} dentro de interpolacao "$", as props ficam disponiveis
    //com essa funcionalidade, é possivel estilizar os componentes de acordo com alguma prop q é passada
    background: ${(props) => 
        props.isActive ? 
        transparentize(0.9, colors[props.activeColor]) : 
        'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.8, '#d7d7d7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

`;