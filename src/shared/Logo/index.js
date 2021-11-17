import styled from "styled-components";

export const Logo = styled.div`
    height: 40vmin;
    aspect-ratio: 1;
    pointer-events: none;
    color: ${props => props.color};

    @media (prefers-reduced-motion: no-preference) {
        animation: Element-spin infinite 30s linear;
    }
    @keyframes Element-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;