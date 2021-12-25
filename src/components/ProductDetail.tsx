import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';
import Rating from './Rating';
import StyledButton from './StyledButton';

const Wrapper = styled.div`
        display: flex;
        padding: 30px 10px 5px 10px;
        font-size: 22px;

        img {
        max-width: 100%;
        }

        div {
            flex: 1;
        }

        div:nth-child(2) {
            * {
                margin-bottom: 5px;
            }

            .bigger {
                font-size: 25px;
                font-weight: bold;
            }
        }

        div:nth-child(3) {
            border: 1px solid ${({theme}) => theme.colors.secondary};
            background: ${({theme}) => theme.colors.secondary};
            align-self: flex-start;
            padding: 15px 8px;
            border-radius: 4px;

            p {
                margin-bottom: 20px;
            }
        }

        .success {
            color: green;
        }

        .error {
            color: red;
        }
    `;


const ProductDetail: React.FC<any> = (props) => {
    const {id} = useParams();
    console.log(id);
    const product = data.products.find(obj => obj._id === id);
    console.log(product);

    if (!product) {
        return (<div>Product not found</div>)
    };

    return (
        <Wrapper>
            <div>
            <img src={product.image} alt={product.name} />
            </div>
            <div>
                <p className="bigger">{product.name}</p>
                <Rating rating={product.rating} reviews={product.numReviews} />
                <p>Price: $ {product.price}</p>
                <p>Description:<br/>{product.description}</p>
            </div>
            <div>
                <p>Price: $ {product.price}</p>
                <p>Status: {product.countInStock > 0 ? <span className="success">In Stock</span>
                            : <span className="error">Unavailable</span>}</p>
                <StyledButton>Add to Cart</StyledButton>
            </div>
        </Wrapper>
    );
};

export default ProductDetail;