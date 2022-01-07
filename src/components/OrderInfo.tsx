import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 100%;
    flex: 1.5;

    & > div {
        border: 1px solid ${({theme}) => theme.colors.tertiary};
        padding: 25px 12px 15px 12px;
        font-size: 20px;
        border-radius: 8px;
        background: ${({theme}) => theme.colors.secondary};
        margin-bottom: 10px;

        p {
            margin-bottom: 15px;
        }
    }

    span {
        font-weight: bold;
    }

    ul {
        list-style: none;
        width: 100%;
    }

    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        img {
            width: 100%;
            max-width: 100px;
        }

        a {
            text-decoration: none;
        }
    }
`;

const OrderInfo = () => {
    const { fullName, address, city, postalCode, country } = useSelector((state: any) => state.cart.address);
    const paymentOption = useSelector((state: any) => state.cart.payment);
    const products = useSelector((state: any) => state.cart.cart);
   

    return (
        <StyledSection>
            <div>
                <h1>Shipping</h1>
                <p><span>Name:</span> {fullName}</p>
                <p><span>Address:</span> {`${address}, ${postalCode}, ${city}, ${country}`}</p>
            </div>
            <div>
                <h1>Payment</h1>
                <p><span>Method:</span> {paymentOption}</p>
            </div>
            <div>
                <h1>Order Items</h1>
                <ul>
                {products.map((item: any) =>
                <li key={item._id}>
                    <img src={item.image} alt={item.name} />
                    <Link to={`/product/${item._id}`}><p>{item.name}</p></Link>
                    <p>{item.qty} x ${item.price} = ${Number(item.qty) * Number(item.price)}</p>
                </li>)}
                </ul>
            </div>
        </StyledSection>
    );
};

export default OrderInfo;