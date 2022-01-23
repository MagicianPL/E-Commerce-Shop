import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { signout } from '../state/actions/userActions';

const StyledHeader = styled.header`
    width: 100%;
    padding: 30px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: ${({theme}) => theme.colors.primary};

    .flex1 {
        flex: 1;
        display: flex;
        justify-content: center;
        gap: 50px;
        align-self: flex-end;
    }

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
        min-width: 97px;
        border-radius: 4px;

        &:hover {
            visibility: visible;
        }

        ul {
            position: absolute;
            right: 0;
            top: 0;
            list-style: none;
            min-width: 100%;
            display: flex;
            flex-direction: column;
            z-index: 1;
            background: white;
            justify-content: flex-end;
            padding: 4px;
            font-size: 20px;
            border-radius: 4px;

            li {
                transition: color 0.4s;
                background: white;
                margin-bottom: 10px;
                cursor: pointer;

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

    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signout());
    }
    
    return (
        <StyledHeader>
            {user.userInfo ?
            <div className="flex1">
                <div>
                <p className="user-name">{userInfo.name} <FaAngleDown /></p>
                <div className="dropdown">
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/history">Orders</Link></li>
                        <li onClick={handleSignOut}>Sign Out</li>
                    </ul>
                </div>
                </div>
                {userInfo.isAdmin &&
                    <div>
                    <p className="user-name">Admin <FaAngleDown /></p>
                    <div className="dropdown">
                        <ul>
                            <li>Dashboard</li>
                            <li>Orders</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    </div>
                }
            </div> :
            <Link to="/signin" className="flex1"><p>Sign In</p></Link>
            }
            <Link to="/"><h1>E-Commerce Shop</h1></Link>
            <Link to="/cart" className="flex1"><p className="cart">
                Cart
                {cartArr.length > 0 ? <span>{cartArr.length}</span> : null}
            </p></Link>
        </StyledHeader>
    );
};

export default Header;