import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from './Input';
import StyledButton from './StyledButton';

const StyledForm = styled.form`
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form is submitted");
        console.log(email);
        console.log(password);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <Input type="email" label="Email address" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            <Input type="password" label="Password" id="password" placeholder="Enter password" value={password} onChange={handlePassChange} />
            <StyledButton type="submit">Sign In</StyledButton>
            <p>New customer? <Link to="/">Create your account</Link></p>
        </StyledForm>
    );
};

export default SignIn;