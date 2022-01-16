import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getOrders } from '../state/actions/orderActions';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;

    h1 {
        margin-bottom: 25px;
    }

    table {
        font-size: 24px;
        border: 1px solid ${({theme}) => theme.colors.primary};
        margin: 0 auto;
        padding: 10px;

        tr > * {
            padding-right: 40px;
            text-align: left;
        }

        td {
            padding-bottom: 20px;
        }

        tr:first-child {
            border-bottom: 1px solid black;
            border-top: none;
        }

        tr {
            border-top: 1px solid black;
        }

        tr:nth-child(even) {
            background: ${({theme}) => theme.colors.secondary};
        }

        .btn {
            padding: 0 5px;
            vertical-align: middle;
        }

        a {
            text-decoration: none;
        }
    }
`

const OrdersHistory = () => {

    const {loading, error, orders} = useSelector((state: any) => state.getOrdersReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

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
                    <td>{order.createdAt.toString().split('T')[0]}</td>
                    <td>{order.totalPrice.toFixed(2)}</td>
                    <td>{order.paidAt ? order.paidAt.toString().split('T')[0] : order.isPaid ? null : "NO"}</td>
                    <td>{order.isDelivered ? "YES" : "NO"}</td>
                    <td className="btn"><Link to={`/order/${order._id}`}><StyledButton>Details</StyledButton></Link></td>
                </tr>)}
            </table>
            : <p>No Orders</p> : null}
        </StyledWrapper>
    );
};

export default OrdersHistory;