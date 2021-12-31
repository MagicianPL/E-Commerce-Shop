import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from './Input';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.primary};

    h1 {
        margin-bottom: 30px;
    }

    p {
        margin-top: 15px;
        font-size: 20px;
    }

    a {
        text-decoration: none;
    }
`;

const SignIn = () => {
    return (
        <StyledWrapper>
            <h1>Sign In</h1>
            <Input label="Email address" id="email" placeholder="Enter email" />
            <Input label="Password" id="password" placeholder="Enter password" />
            <StyledButton>Sign In</StyledButton>
            <p>New customer? <Link to="/">Create your account</Link></p>
        </StyledWrapper>
    );
};

export default SignIn;