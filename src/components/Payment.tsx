import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { savePayment } from '../state/actions/cartActions';
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

        input {
            width: 20px;
            height: 20px;
        }

        input,label {
            cursor: pointer;
        }
    }

    .option:nth-of-type(2) {
        margin-bottom: 50px;
    }
`;

const Payment = () => {
    // If address is an empy object (from prev step) - redirect
    const navigate = useNavigate();
    const address = useSelector((state: any) => state.cart.address);
    
    useEffect(()=>{
        if (Object.keys(address).length === 0) {
            navigate("/shipping");
        }
    });


    const [payment, setPayment] = useState("Paypal");

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setPayment(e.target.value);
    };

    
    const dispatch = useDispatch();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(savePayment(payment));
        navigate("/placeorder");
    };

    return (
        <>
        <Steps step="step3" />
        <StyledWrapper>
            <h1>Payment</h1>
            <form onSubmit={handleFormSubmit}>
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
        </>
    );
};

export default Payment;