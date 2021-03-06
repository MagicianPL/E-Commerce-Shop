import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input from './Input';
import StyledButton from './StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../state/actions/userActions';

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
    const { search } = useLocation();
    const redirect = search ? `/${search.split("=")[1]}` : "/";
    const user = useSelector((state: any) => state.user);
    const {userInfo, loading, error} = user;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signIn(email, password));
        console.log("Form is submitted");
        console.log(email);
        console.log(password);
    };

    const navigate = useNavigate();
    console.log(userInfo)
    useEffect(() => {
       if (userInfo) {
           navigate(redirect);
       };
    }, [navigate, redirect, userInfo]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            {loading && "Loading..."}
            {error && error}
            <h1>Sign In</h1>
            <Input type="email" label="Email address" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            <Input type="password" label="Password" id="password" placeholder="Enter password" value={password} onChange={handlePassChange} />
            <StyledButton type="submit">Sign In</StyledButton>
            <p>New customer? <Link to="/register">Create your account</Link></p>
        </StyledForm>
    );
};

export default SignIn;