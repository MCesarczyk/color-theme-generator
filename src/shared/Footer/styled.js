import styled from "styled-components";

export const FooterLabel = styled.span`
    font-size: 0.75rem;
    font-style: italic;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

export const FooterLink = styled.a`
    color: crimson;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: 0.5s all;

    &:hover {
        filter: brightness(2.5);
    }
`;