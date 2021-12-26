import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

    const [loadingData, setLoadingData] = useState(false);
    const [products, setProducts] = useState<IState["products"]>([]);
    const [error, setError] = useState<any>(false);

    useEffect(()=>{
        const fetchData = async() => {
            await setLoadingData(true);

            try {
                const res = await fetch("http://localhost:5000/api/products");
                const data = await res.json();
                setProducts(data);
                setLoadingData(false);
            } catch(err) {
                setError("Sorry, something gone wrong");
                console.log(err);
                setLoadingData(false);
            };
        };

        fetchData();
    }, []);

    return (
        <StyledWrapper>
            {loadingData ? <h1>Loading Data...</h1>
            : error ? <p>{error}</p>
            :
            products.map(product => <Product key={product._id} product={product} />)}
        </StyledWrapper>
    );
};

export default ProductsContainer;