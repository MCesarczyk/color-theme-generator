import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f5f5f5;
    padding: 0 12px;
    margin: 24px auto;
    border-radius: 6px;
    width: 80%;
`;

export const BadgesList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

export const Badge = styled.li.attrs(props => ({
    type: 'text',
    size: props.color || '#282c34',
}))`
    color: #fff;
    background-color: ${props => props.color};
    padding: 6px 24px;
    border-radius: 6px;
    margin: 6px;
`;