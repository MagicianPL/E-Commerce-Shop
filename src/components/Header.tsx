import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    padding: 30px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${({theme}) => theme.colors.primary};

    p {
        font-size: 24px;
        align-self: flex-end;
        cursor: pointer;
        transition: color 0.4s;

        &:hover {
            color: ${({theme}) => theme.colors.tertiary};
        }
    }

    .cart {
        display: flex;
        align-items: center;

        span {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.secondary};
            margin-left: 6px;
            display: flex;
            justify-content: center;
            line-height: 22px;
        }
    }
`;

const Header = () => {
    //cart array from redux store
    const cartArr = useSelector((state: any) => state.cart.cart);
    
    return (
        <StyledHeader>
            <p>Sign In</p>
            <h1>E-Commerce Shop</h1>
            <p className="cart">
                Cart
                {cartArr.length > 0 ? <span>{cartArr.length}</span> : null}
            </p>
        </StyledHeader>
    );
};

export default Header;