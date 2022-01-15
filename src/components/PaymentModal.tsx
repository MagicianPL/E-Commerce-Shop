import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
`;

const StyledModalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    position: relative;

    & > div {
        width: 100%;
        max-width: 500px;
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px;
        border-radius: 8px;
        background: white;
    }
`;

const PaymentModal = () => {
    return (
        <>
            <StyledOverlay />
            <StyledModalWrapper>
                <div>
                    <h1>PAYMENT</h1>
                    <p>Do you want to flag this order as paid?</p>
                </div>
            </StyledModalWrapper>
        </>
    );
};

export default PaymentModal;