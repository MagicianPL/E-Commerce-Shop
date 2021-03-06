import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Steps from './Steps';
import Input from './Input';
import StyledButton from './StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../state/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    h1 {
        margin-bottom: 20px;
    }
`;

const ShippingAddress = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user.userInfo);
    //if user is not signIn - redirect to SignIn page
    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    })

    const initialValues = {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    }
    const [inputValues, setInputValues] = useState(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        setInputValues({
            ...inputValues,
            [inputName]: e.target.value,
        })
    };

    const dispatch = useDispatch();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(saveShippingAddress(inputValues));
        navigate("/payment");
    };

    return (
        <>
        <Steps step="step2" />
        <StyledWrapper>
            <h1>Shipping Address</h1>
            <form onSubmit={handleFormSubmit}>
                <Input value={inputValues.fullName} onChange={handleInputChange} label="Full Name" id="fullName" type="text" placeholder="Enter full name" name="fullName" isRequired={true} />
                <Input value={inputValues.address} onChange={handleInputChange} label="Address" id="address" type="text" placeholder="Enter address" name="address" isRequired={true} />
                <Input value={inputValues.city} onChange={handleInputChange} label="City" id="city" type="text" placeholder="Enter City" name="city" isRequired={true} />
                <Input value={inputValues.postalCode} onChange={handleInputChange} label="Postal Code" id="postalCode" type="text" placeholder="Enter Postal Code" name="postalCode" isRequired={true} />
                <Input value={inputValues.country} onChange={handleInputChange} label="Country" id="country" type="text" placeholder="Enter Country" name="country" isRequired={true} />
                <StyledButton>Continue</StyledButton>
            </form>
        </StyledWrapper>
        </>
    );
};

export default ShippingAddress;