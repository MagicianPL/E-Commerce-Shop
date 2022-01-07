import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    border: 1px solid ${({theme}) => theme.colors.tertiary};
    padding: 25px 12px 15px 12px;
    font-size: 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.secondary};
`;

const OrderAction = () => {
    return (
        <StyledWrapper>
            <p>nnnfrj</p>
        </StyledWrapper>
    );
};

export default OrderAction;