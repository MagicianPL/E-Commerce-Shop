import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.primary};
`;

const SignIn = () => {
    return (
        <StyledWrapper>
            <h1>Sign In</h1>
            <Input label="Email address" id="email" />
        </StyledWrapper>
    );
};

export default SignIn;