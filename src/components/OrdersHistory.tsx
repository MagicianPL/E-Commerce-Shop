import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getOrders } from '../state/actions/orderActions';

const StyledWrapper = styled.div`
    width: 100%;

    h1 {
        margin-bottom: 25px;
    }

    table {
        font-size: 24px;
        border: 1px solid ${({theme}) => theme.colors.primary};
        padding: 10px;
        margin: 0 auto;

        * {
            padding-right: 40px;
            text-align: left;
        }

        th, td {
            padding-bottom: 20px;
        }
    }
`

const OrdersHistory = () => {

    const {loading, error, orders} = useSelector((state: any) => state.getOrdersReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])

    return (
        <StyledWrapper>
            <h1>Order History</h1>
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            {orders ? orders.length > 0 ?
            <table>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th>Actions</th>
                </tr>
                {orders.map((order: any) =>
                <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.isPaid ? "YES" : "NO"}</td>
                    <td>{order.isDelivered ? "YES" : "NO"}</td>
                    <td>actions</td>
                </tr>)}
            </table>
            : <p>No Orders</p> : null}
        </StyledWrapper>
    );
};

export default OrdersHistory;