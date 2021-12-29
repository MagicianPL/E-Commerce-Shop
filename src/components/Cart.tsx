import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { addToCart } from '../state/actions/cartActions';
import CartAction from './CartAction';
import ShoppingCart from './ShoppingCart';

const StyledWrapper = styled.div`
        width: 100%;
        display: flex;
    `;


const Cart = () => {

    const {id} = useParams();
    const qty = useLocation().search.split("=")[1];

    const dispatch = useDispatch();
    useEffect(()=>{
        if(id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);

    return (
    <StyledWrapper>
        <ShoppingCart />
        <CartAction />
    </StyledWrapper>
    );
};

export default Cart;