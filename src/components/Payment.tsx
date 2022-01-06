import React from 'react';
import styled from 'styled-components';
import Steps from './Steps';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

const Payment = () => {
    return (
        <StyledWrapper>
            <Steps step="step3" />
            <h1>Payment</h1>
        </StyledWrapper>
    );
};

export default Payment;