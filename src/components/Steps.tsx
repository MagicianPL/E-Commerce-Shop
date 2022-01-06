import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    p {
        flex: 1;
        border-top: 3px solid #BF953F;
        padding: 8px 5px;
        font-size: 20px;
        color: #BF953F;
    }

    .active {
        border-top: 3px solid ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.primary};
    }
`;

interface IProps {
    step?: string
}

const Steps: React.FC<IProps> = ({step}) => {
    return (
        <StyledWrapper>
            <p className={step === 'step2' ? 'active' : step === 'step3' ? 'active' : step === 'step4' ? 'active' : ""}>Sign-In</p>
            <p className={step === 'step2' ? 'active' : step === 'step3' ? 'active' : step === 'step4' ? 'active' : ""}>Shipping</p>
            <p className={step === 'step3' ? 'active' : step === 'step4' ? 'active' : ""}>Payment</p>
            <p className={step === 'step4' ? 'active' : ""}>Place Order</p>
        </StyledWrapper>
    );
};

export default Steps;