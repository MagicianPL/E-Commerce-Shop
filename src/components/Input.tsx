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
}

const Input: React.FC<IProps> = ({label, id, placeholder}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" placeholder={placeholder ? placeholder : ""} />
        </StyledWrapper>
    );
};

export default Input;