import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    border: 1px solid red;
    color: ${({theme}) => theme.colors.primary};

    h1 {
        margin-bottom: 25px;
    }

    li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 18px;

        img {
            width: 100%;
            max-width: 80px;
        }

        p {
            font-size: 22px;
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
                <p>$ {item.price}</p>
                <StyledButton width="auto" font="16">DELETE</StyledButton>
            </li>)}
        </StyledWrapper>
    );
};

export default ShoppingCart;