import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { addToCart } from '../state/actions/cartActions';
import ShoppingCart from './ShoppingCart';


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
        <>
        <ShoppingCart />
        </>
    );
};

export default Cart;