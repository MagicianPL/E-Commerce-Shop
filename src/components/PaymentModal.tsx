import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { payOrder } from '../state/actions/orderActions';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: black;
        opacity: 0.8;
        z-index: -1;
    }

    & > div {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow-y: auto;
    }
`;

const StyledModal = styled.div`
width: 100%;
max-width: 500px;
position: absolute;
top: 30px;
left: 50%;
transform: translateX(-50%);
background: white;
border-radius: 8px;
padding: 15px;
min-height: 200px;

h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}

p {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
}

div:last-child {
    width: 100%;
    display: flex;
    gap: 14px;
}
`;

interface IProps {
    onCancel: React.MouseEventHandler<HTMLButtonElement>,
    id: string | undefined,
}

const PaymentModal: React.FC<IProps> = ({onCancel, id}) => {

    const {loading, error} = useSelector((state: any) => state.payOrderReducer);

    const dispatch = useDispatch();
    const handleOrderPay = () => {
        dispatch(payOrder(id));
    }

    return (
        <StyledWrapper>
            <div>
            <StyledModal>
                <h1>PAYMENT</h1>
                <p>Do you want to flag this order as paid?</p>
                {loading && <p>Please wait...</p>}
                {error && <p>Error: {error}</p>}
                <div>
                    <StyledButton onClick={handleOrderPay}>YES</StyledButton>
                    <StyledButton onClick={onCancel}>CANCEL</StyledButton>
                </div>
            </StyledModal>
            </div>
        </StyledWrapper>
    );
};

export default PaymentModal;