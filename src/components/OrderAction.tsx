import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createOrder } from '../state/actions/orderActions';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.tertiary};
    padding: 25px 12px 15px 12px;
    font-size: 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.secondary};
    flex: 1;
    align-self: flex-start;

    p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .bold {
        font-weight: bold;
    }
`;

const OrderAction = () => {
    const items = useSelector((state: any) => state.cart.cart);
    const address = useSelector((state: any) => state.cart.address);
    const payment = useSelector((state: any) => state.cart.payment);
    
    //total price of all items
    const summaryPrice = items.reduce((a: any, c: any) => a + Number(c.qty) * Number(c.price), 0);
    const tax = (0.23 * summaryPrice).toFixed(2);
    const totalOrderPrice = summaryPrice + 10 + Number(tax);
    
    const dispatch = useDispatch();
    const handlePlaceOrder = () => {
        const order = {
            orderItems: items,
            shippingAddress: address,
            payment: payment,
            itemsPrice: summaryPrice,
            shippingPrice: 10,
            taxPrice: tax,
            totalPrice: totalOrderPrice,
        }
        //action
        dispatch(createOrder(order))
    };

    return (
        <StyledWrapper>
            <h1>Order Summary</h1>
            <p><span>Items</span> <span>${summaryPrice}</span></p>
            <p><span>Shipping</span> <span>$10</span></p>
            <p><span>Tax</span> <span>${tax}</span></p>
            <p className="bold"><span>Order Total</span> <span>${totalOrderPrice.toFixed(2)}</span></p>
            <StyledButton onClick={handlePlaceOrder}>Place Order</StyledButton>
        </StyledWrapper>
    );
};

export default OrderAction;