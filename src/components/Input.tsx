import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
`;

interface IProps {
    label: string
    id: string
}

const Input: React.FC<IProps> = ({label, id}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
        </StyledWrapper>
    );
};

export default Input;