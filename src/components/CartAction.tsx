import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    background: ${({theme}) => theme.colors.secondary};
    align-self: flex-start;
    margin-left: 20px;
    border-radius: 8px;
    padding: 25px 15px;

    p {
        font-size: 23px;
        font-weight: bold;
        color: ${({theme}) => theme.colors.tertiary};
        margin-bottom: 35px;
    }
`;

const CartAction = () => {
    const cartItemsArr = useSelector((state: any) => state.cart.cart);

    return(
        <StyledWrapper>
            <p>Subtotal ({cartItemsArr.reduce((a: any, c: any) => a + Number(c.qty), 0)} items): {cartItemsArr.reduce((a: any, c: any) => a + Number(c.price) * Number(c.qty), 0)} $</p>
            <StyledButton>Proceed to Checkout</StyledButton>
        </StyledWrapper>
    );
};

export default CartAction;