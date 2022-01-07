import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`

`;

const OrderInfo = () => {
    return (
        <StyledSection>
            <div>
                <h1>Shipping</h1>
            </div>
            <div>
                <h1>Payment</h1>
            </div>
            <div>
                <h1>Order Items</h1>
            </div>
        </StyledSection>
    );
};

export default OrderInfo;