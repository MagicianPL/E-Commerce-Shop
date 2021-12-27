import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


const Cart = () => {
    const {id} = useParams();
    const qty = useLocation().search.split("=")[1];


    return (
        <>
        <h1>CART Component</h1>
        <p>ID of product: {id}</p>
        <p>Qty: {qty}</p>
        </>
    );
};

export default Cart;