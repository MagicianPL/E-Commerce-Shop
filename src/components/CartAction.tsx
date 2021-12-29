import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledWrapper = styled.div`
    width: 100%;
    border: 1px solid blue;
`;

const CartAction = () => {
    const cartItemsArr = useSelector((state: any) => state.cart.cart);

    return(
        <StyledWrapper>
            <h1>Cart Action</h1>
            <p>Subtotal {cartItemsArr.reduce((a: any, c: any) => a + Number(c.qty), 0)} items : {cartItemsArr.reduce((a: any, c: any) => a + Number(c.price) * Number(c.qty), 0)} $</p>
        </StyledWrapper>
    );
};

export default CartAction;