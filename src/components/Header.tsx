import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    padding: 30px 15px;
    display: flex;
    justify-content: space-around;
    color: ${({theme}) => theme.colors.primary};

    p {
        font-size: 24px;
        align-self: flex-end;
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <p>Sign In</p>
            <h1>E-Commerce Shop</h1>
            <p>Cart</p>
        </StyledHeader>
    );
};

export default Header;