import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 290px;
    border: 2px solid ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.colors.secondary};
    margin: 10px;
    border-radius: 5px;

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        border-radius: 5px;
    }

    .body {
        padding: 10px;

        * {
            margin-bottom: 7px;
            font-size: 20px;
        }

        p {
            display: flex;
            align-items: center;
            gap: 3px;
        }

        p:first-child {
            color: ${({theme}) => theme.colors.tertiary};
            font-weight: bold;
        }
    }
`;

export interface IProps {
    product: {
        _id: string
        name: string
        category: string
        image: string
        price: number
        countInStock: number
        brand: string
        rating: number
        numReviews: number
        description: string
    }
}

const Product: React.FC<IProps> = ({product}) => {
    return(
        <StyledWrapper>
            <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.name} />
            </Link>
            <div className="body">
            <Link to={`/product/${product._id}`}>
                <p>{product.name}</p>
            </Link>
                <Rating rating={product.rating} reviews={product.numReviews}/>
                <p>$<span>{product.price}</span></p>
            </div>
        </StyledWrapper>
    );
};

export default Product;