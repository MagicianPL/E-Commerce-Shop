import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input from './Input';
import StyledButton from './StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { register, signIn } from '../state/actions/userActions';

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

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const { search } = useLocation();
    const redirect = search ? `/${search.split("=")[1]}` : "/";
    const user = useSelector((state: any) => state.user);
    const {userInfo} = user;
    const registerReducer = useSelector((state: any) => state.userRegisterReducer);
    const {loading, error} = registerReducer;

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmedPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmedPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === confirmedPassword) {
            await dispatch(register(name, email, password));
            dispatch(signIn(email, password));
        } else {
            //show modal
            alert("Passwords are not the same!")
        }
    };

    const navigate = useNavigate();
    
    useEffect(() => {
       if (userInfo) {
           navigate(redirect);
       };
    }, [navigate, redirect, userInfo]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            {loading && "Loading..."}
            {error && error}
            <h1>Create Account</h1>
            <Input type="text" label="Login" id="login" placeholder="Login" value={name} onChange={handleLoginChange} />
            <Input type="email" label="Email address" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            <Input type="password" label="Password" id="password" placeholder="Enter password" value={password} onChange={handlePassChange} />
            <Input type="password" label="Confirm Password" id="confirmedPassword" placeholder="Confirm password" value={confirmedPassword} onChange={handleConfirmedPassChange} />
            <StyledButton type="submit">Register</StyledButton>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </StyledForm>
    );
};

export default Register;