import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

const StyledHeader = styled.header`
    width: 100%;
    padding: 30px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${({theme}) => theme.colors.primary};

    p {
        font-size: 24px;
        align-self: flex-end;
        cursor: pointer;
        transition: color 0.4s;
        display: flex;
        align-items: center;

        &:hover {
            color: ${({theme}) => theme.colors.tertiary};
        }
    }

    svg {
        position: relative;
        top: 2px;
    }

    .dropdown {
        visibility: hidden;
        position: relative;

        &:hover {
            visibility: visible;
        }

        ul {
            position: absolute;
            right: 0;
            top: 0;
            list-style: none;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 4px 8px 0 0;
            font-size: 20px;

            li {
                transition: color 0.4s;

                &:hover {
                    color: ${({theme}) => theme.colors.tertiary};
                }
            }
        }
    }

    .user-name:hover + .dropdown {
        visibility: visible;
    }

    .cart  {
        span {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.secondary};
            margin-left: 6px;
            display: flex;
            justify-content: center;
            line-height: 22px;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Header = () => {
    //cart array from redux store
    const cartArr = useSelector((state: any) => state.cart.cart);
    const user = useSelector((state: any) => state.user);
    const {userInfo} = user;
    
    return (
        <StyledHeader>
            {user.userInfo ?
            <Link to="/">
                <p className="user-name">{userInfo.name} <FaAngleDown /></p>
                <div className="dropdown">
                    <ul>
                        <li>Sign Out</li>
                    </ul>
                </div>
            </Link> :
            <Link to="/signin"><p>Sign In</p></Link>
            }
            <Link to="/"><h1>E-Commerce Shop</h1></Link>
            <Link to="/cart"><p className="cart">
                Cart
                {cartArr.length > 0 ? <span>{cartArr.length}</span> : null}
            </p></Link>
        </StyledHeader>
    );
};

export default Header;