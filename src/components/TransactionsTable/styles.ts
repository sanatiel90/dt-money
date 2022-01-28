import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem; //prop que coloca espaçamento entre elementos da table

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            //se for a primeira td...
            &:first-child {
                color: var(--text-title);
            }

            //se a td tiver a class deposit...
            &.deposit {
                color: var(--green);
            }

            //se a td tiver a class withdraw...
            &.withdraw {
                color: var(--red);
            }

        }
    }
`;