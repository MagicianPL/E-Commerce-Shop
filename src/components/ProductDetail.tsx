import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';
import Rating from './Rating';

const Wrapper = styled.div`
        display: flex;

        img {
            flex: 1.5;
        }

        div {
            flex: 1;
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
            <img src={product.image} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <Rating rating={product.rating} reviews={product.numReviews} />
                <p>Price: $ {product.price}</p>
                <p>Description:<br/>{product.description}</p>
            </div>
            <div></div>
        </Wrapper>
    );
};

export default ProductDetail;