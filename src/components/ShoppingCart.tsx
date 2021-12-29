import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../state/actions/cartActions';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 800px;
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

        select {
            width: 45px;
            font-size: 18px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
`;

const ShoppingCart = () => {

    const cartItemsArr = useSelector((state: any) => state.cart.cart);
    const dispatch = useDispatch();

    const handleDeleteClick = (id: string) => {
        //delete action
        console.log(id);
    }

    return (
        <StyledWrapper>
            <h1>Shopping Cart</h1>
            {cartItemsArr.map((item: any) => <li key={item._id}>
               <Link to={`/product/${item.product}`}><img src={item.image} alt={item.name} /></Link>
               <Link to={`/product/${item.product}`}><p>{item.name}</p></Link>
                <select value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                {[...Array(item.countInStock).keys()].map(
                        x => <option key={x+1} value={x+1}>{x+1}</option>
                    )}
                </select>
                <p>$ {item.price}</p>
                <StyledButton onClick={() => {handleDeleteClick(item.product)}} width="auto" font="16">DELETE</StyledButton>
            </li>)}
        </StyledWrapper>
    );
};

export default ShoppingCart;