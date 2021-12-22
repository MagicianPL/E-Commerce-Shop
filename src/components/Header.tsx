import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    padding: 30px 15px;
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.colors.primary};
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>E-Commerce Shop</h1>
        </StyledHeader>
    );
};

export default Header;