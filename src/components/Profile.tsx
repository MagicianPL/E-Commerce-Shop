import React, {useEffect} from 'react';
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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(userId) {
            dispatch(getDetails(userId));
        } else {
            navigate("/signin");
        }
    },[dispatch, userId, navigate]);

    const handleInputChange = () => {

    };

    return (
        <StyledWrapper>
            <h1>User Profile</h1>
            <form>
                <Input label="Name" id="name" type="text" value="" onChange={handleInputChange}/>
                <Input label="Email" id="email" type="text" value="" onChange={handleInputChange}/>
                <Input label="Password" id="password" type="text" value="" onChange={handleInputChange}/>
                <Input label="confirm Password" id="confirmPass" type="text" value="" onChange={handleInputChange}/>
            </form>
        </StyledWrapper>
    );
};

export default Profile;