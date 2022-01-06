import React from 'react';
import styled from 'styled-components';
import Steps from './Steps';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

const ShippingAddress = () => {
    return (
        <>
        <Steps step="step2" />
        <StyledWrapper>
            <h1>Shipping</h1>
        </StyledWrapper>
        </>
    );
};

export default ShippingAddress;