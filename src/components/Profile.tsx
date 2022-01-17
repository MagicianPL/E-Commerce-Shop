import React from 'react';
import styled from 'styled-components';
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