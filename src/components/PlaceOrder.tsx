import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Steps from './Steps';
import OrderInfo from './OrderInfo';
import OrderAction from './OrderAction';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    h1 {
        margin-bottom: 20px;
    }
`;

const PlaceOrder = () => {
    // If address is an empy object (from one of prev step) - redirect
    const navigate = useNavigate();
    const address = useSelector((state: any) => state.cart.address);
    
    /*useEffect(()=>{
        if (Object.keys(address).length === 0) {
            navigate("/shipping");
        }
    });*/

    return (
        <>
        <Steps step="step4" />
        <StyledWrapper>
            <OrderInfo />
            <OrderAction />
        </StyledWrapper>
        </>
    );
};

export default PlaceOrder;