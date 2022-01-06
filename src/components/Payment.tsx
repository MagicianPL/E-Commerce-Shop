import React, { useState } from 'react';
import styled from 'styled-components';
import Steps from './Steps';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    h1 {
        margin-bottom: 20px;
    }

    .option {
        font-size: 22px;
        font-weight: bold;
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 15px;

        input,label {
            cursor: pointer;
        }
    }

    .option:nth-of-type(2) {
        margin-bottom: 50px;
    }
`;

const Payment = () => {
    const [payment, setPayment] = useState("Paypal");

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setPayment(e.target.value);
    };

    return (
        <StyledWrapper>
            <Steps step="step3" />
            <h1>Payment</h1>
            <form>
                <div className="option">
                    <input onChange={handlePaymentChange} type="radio" id="paypal" value="Paypal" name="payment" defaultChecked />
                    <label htmlFor="paypal">Paypal</label>
                </div>
                <div className="option">
                    <input onChange={handlePaymentChange} type="radio" id="stripe" value="Stripe" name="payment" />
                    <label htmlFor="stripe">Stripe</label>
                </div>
                <StyledButton>Continue</StyledButton>
            </form>
        </StyledWrapper>
    );
};

export default Payment;