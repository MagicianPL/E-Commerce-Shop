import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import OrderInfo from './OrderInfo';
import OrderAction from './OrderAction';
import { getSingleOrder } from '../state/actions/orderActions';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    h1 {
        margin-bottom: 20px;
    }
`;

const PlacedOrderScreen = () => {
    //Order ID
    const {id} = useParams();
    console.log(id);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getSingleOrder(id));
    };

    return (
        <StyledWrapper>
            <OrderInfo />
            <OrderAction />
            <button onClick={handleClick}>CLICK</button>
        </StyledWrapper>
    );
};

export default PlacedOrderScreen;