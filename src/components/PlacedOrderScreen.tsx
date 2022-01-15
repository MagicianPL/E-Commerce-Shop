import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSingleOrder } from '../state/actions/orderActions';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    gap: 20px;

    h1 {
        margin-bottom: 20px;
    }

    .loading, .error {
        font-weight: bold;
        text-align: center;
        font-size: 25px;
        flex: 1;
        min-height: 20vh;
    }

    .error {
        color: red;
    }
`;

const StyledOrderInfo = styled.section`
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

        .success, .failure {
            text-align: center;
        }

        .success {
            color: green;
        }

        .failure {
            color: red;
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

const StyledOrderSummary = styled.section`
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
`

const PlacedOrderScreen = () => {
    //Order ID
    const {id} = useParams();
    const order = useSelector((state: any) => state.getOrderReducer.order);
    const {loading, error} = useSelector((state: any) => state.getOrderReducer);
    const summaryPrice = order ? order.orderItems.reduce((a: any, c: any) => a + Number(c.qty) * Number(c.price), 0) : null;
    const tax = (0.23 * summaryPrice).toFixed(2);
    const totalOrderPrice = summaryPrice + 10 + Number(tax);

    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getSingleOrder(id));
    }, [id, dispatch]);

    const handleSuccessPayment = () => {
        //handle that
    };

    return (
    <>
    {order && <h1>Order {id}</h1>}
    <StyledWrapper>
        {loading && <p className="loading">Loading data, please wait...</p>}
        {error && <p className="error">{error}</p>}
        {order &&
        <>
        <StyledOrderInfo>
        <div>
            <h1>Shipping</h1>
            <p><span>Name:</span> {order.shippingAddress.fullName}</p>
            <p><span>Address:</span> {order.shippingAddress.address}, {order.shippingAddress.postalCode}, {order.shippingAddress.city}, {order.shippingAddress.country}</p>
            {order.isDelivered ? <p className="success">Delivered at `${order.deliveredAt}`</p> : <p className="failure">Not Delivered</p>}
        </div>
        <div>
            <h1>Payment</h1>
            <p><span>Method:</span> {order.payment}</p>
            {order.isPaid ? <p className="success">Paid at `${order.paidAt}`</p> : <p className="failure">Not Paid</p>}
        </div>
        <div>
            <h1>Order Items</h1>
            <ul>
            {order.orderItems.map((item: any) =>
            <li key={item._id}>
                <img src={item.image} alt={item.name} />
                <Link to={`/product/${item._id}`}><p>{item.name}</p></Link>
                <p>{item.qty} x ${item.price} = ${Number(item.qty) * Number(item.price)}</p>
            </li>)}
            </ul>
        </div>
    </StyledOrderInfo>
    <StyledOrderSummary>
        <h1>Order Summary</h1>
        <p><span>Items</span> <span>${summaryPrice}</span></p>
        <p><span>Shipping</span> <span>$10</span></p>
        <p><span>Tax</span> <span>{tax}</span></p>
        <p className="bold"><span>Order Total</span> <span>${totalOrderPrice}</span></p>
        {!order.isPaid && <StyledButton>{order.payment} pay</StyledButton>}
    </StyledOrderSummary>
    </>
        }
    </StyledWrapper>
    </>
    );
};

export default PlacedOrderScreen;