import React, { useState } from 'react';
import styled from 'styled-components';
import Steps from './Steps';
import Input from './Input';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

const ShippingAddress = () => {
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
        console.log(inputName);
        setInputValues({
            ...inputValues,
            [inputName]: e.target.value,
        })
        console.log(inputValues);
    };

    return (
        <>
        <Steps step="step2" />
        <StyledWrapper>
            <h1>Shipping Address</h1>
            <form>
                <Input value={inputValues.fullName} onChange={handleInputChange} label="Full Name" id="fullName" type="text" placeholder="Enter full name" name="fullName" />
                <Input value={inputValues.address} onChange={handleInputChange} label="Address" id="address" type="text" placeholder="Enter address" name="address" />
                <Input value={inputValues.city} onChange={handleInputChange} label="City" id="city" type="text" placeholder="Enter City" name="city" />
                <Input value={inputValues.postalCode} onChange={handleInputChange} label="Postal Code" id="postalCode" type="text" placeholder="Enter Postal Code" name="postalCode" />
                <Input value={inputValues.country} onChange={handleInputChange} label="Country" id="country" type="text" placeholder="Enter Country" name="country" />
            </form>
        </StyledWrapper>
        </>
    );
};

export default ShippingAddress;