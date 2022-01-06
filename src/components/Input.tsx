import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 20px;
    margin-bottom: 25px;

    label {
        font-weight: bold;
    }

    input {
        font-size: 20px;
        color: ${({theme}) => theme.colors.primary};
        border: 1px solid ${({theme}) => theme.colors.primary};
        border-radius: 5px;
        padding: 5px;
    }
`;

interface IProps {
    label: string
    id: string
    placeholder?: string
    type: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
    name?: string
    isRequired?: boolean
}

const Input: React.FC<IProps> = ({label, id, placeholder, type, onChange, value, name, isRequired}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder ? placeholder : ""} onChange={onChange} value={value} name={name ? name : ""} required={isRequired ? isRequired : undefined}/>
        </StyledWrapper>
    );
};

export default Input;