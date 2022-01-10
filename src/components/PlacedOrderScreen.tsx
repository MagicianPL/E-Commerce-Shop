import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import OrderInfo from './OrderInfo';
import OrderAction from './OrderAction';

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

    return (
        <StyledWrapper>
            <OrderInfo />
            <OrderAction />
        </StyledWrapper>
    );
};

export default PlacedOrderScreen;