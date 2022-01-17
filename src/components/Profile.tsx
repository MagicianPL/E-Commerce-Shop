import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getDetails } from '../state/actions/userActions';
import Input from './Input';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    h1 {
        margin-bottom: 30px;
    }

    .errorMessage {
        color: red;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        background: ${({theme}) => theme.colors.secondary};
        padding: 10px;
    }
`

const Profile = () => {

    const userId = useSelector((state: any) => state.user.userInfo._id);
    const {loading, error, details} = useSelector((state: any) => state.userDetailsReducer);

    //For Inputs
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });
    

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(userId) {
            dispatch(getDetails(userId));
        } else {
            navigate("/signin");
        }
    },[dispatch, userId, navigate]);

    //sets values from fetched data
    useEffect(() => {
        if (details) {
            setInputValues(prevState => ({
                ...prevState,
                name: details.name,
                email: details.email,
            }))
        }
    }, [details]);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, email, password, confirmPass} = inputValues;
        if (!name || !email || !password || !confirmPass) {
            setErrorMessage("Error: Values cannot be empty");
        } else if (password !== confirmPass) {
            setErrorMessage("Error: Passwords do not match");
        } else {
            setErrorMessage("");
            console.log("everything is ok");
        }
    };

    return (
        <StyledWrapper>
            {loading ? <h1>Loading...</h1>
            : error ? <h1>{error}</h1>
            : details ? <>
            <h1>User Profile</h1>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <form onSubmit={handleFormSubmit}>
                <Input label="Name" id="name" name="name" type="text" value={inputValues.name} onChange={handleInputChange}/>
                <Input label="Email" id="email" name="email" type="text" value={inputValues.email} onChange={handleInputChange}/>
                <Input label="Password" id="password" name="password" type="password" value={inputValues.password} onChange={handleInputChange}/>
                <Input label="confirm Password" id="confirmPass" name="confirmPass" type="password" value={inputValues.confirmPass} onChange={handleInputChange}/>
                <StyledButton type="submit">UPDATE</StyledButton>
            </form>
            </> : null}
        </StyledWrapper>
    );
};

export default Profile;