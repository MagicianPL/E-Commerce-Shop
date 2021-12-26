import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../data';
import Product from './Product';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductsContainer = () => {

    interface IState {
        products: {
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
        }[]
    }

    const [products, setProducts] = useState<IState["products"]>([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:5000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => setError(err))
    }, []);

    useEffect(()=>{
        console.log(products);
        console.log(error);
    })

    return (
        <StyledWrapper>
            {data.products.map((product: any) => <Product key={product._id} product={product}/>)}
        </StyledWrapper>
    );
};

export default ProductsContainer;