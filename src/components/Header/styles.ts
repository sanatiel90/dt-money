import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    //1rem equivale ao tamanho do font-size do root (parent) do elemento (16px);
    padding: 2rem 1rem 16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        background: var(--blue-light);
        color: #fff;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.85);
        }

    }
`;