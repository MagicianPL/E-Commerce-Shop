import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { addToCart } from '../state/actions/cartActions';


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
        <h1>CART Component</h1>
        <p>ID of product: {id}</p>
        <p>Qty: {qty}</p>
        </>
    );
};

export default Cart;