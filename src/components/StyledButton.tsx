import styled from 'styled-components';

const StyledButton = styled.button<{width?: string, font?: string}>`
    width: ${(props) => props.width === "auto" ? "auto" : "100%"};
    padding: 6px 8px;
    background: #BF953F;
    border: none;
    font-size: ${(props) => props.font ? `${props.font}px` : "22px"};
    border-radius: 6px;
    cursor: pointer;
`;

export default StyledButton;