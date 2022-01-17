import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getDetails } from '../state/actions/userActions';
import Input from './Input';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    h1 {
        margin-bottom: 30px;
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
        console.log(inputValues);
    };

    return (
        <StyledWrapper>
            <h1>User Profile</h1>
            <form>
                <Input label="Name" id="name" name="name" type="text" value={inputValues.name} onChange={handleInputChange}/>
                <Input label="Email" id="email" name="email" type="text" value={inputValues.email} onChange={handleInputChange}/>
                <Input label="Password" id="password" name="password" type="password" value={inputValues.password} onChange={handleInputChange}/>
                <Input label="confirm Password" id="confirmPass" name="confirmPass" type="password" value={inputValues.confirmPass} onChange={handleInputChange}/>
            </form>
        </StyledWrapper>
    );
};

export default Profile;