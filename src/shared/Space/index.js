import styled, { css } from "styled-components";

export const Space = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;

    @media (max-width: 576px) {
        flex-direction: column;
    }

    ${({ footer }) => footer && css`
        margin-bottom: 3rem;
    `}
`;