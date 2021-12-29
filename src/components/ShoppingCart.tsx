import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            width: 100%;
            max-width: 80px;
        }
    }
`;

const ShoppingCart = () => {

    const cartItemsArr = useSelector((state: any) => state.cart.cart);

    return (
        <StyledWrapper>
            <h1>Shopping Cart</h1>
            {cartItemsArr.map((item: any) => <li>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <StyledButton>DELETE</StyledButton>
            </li>)}
        </StyledWrapper>
    );
};

export default ShoppingCart;