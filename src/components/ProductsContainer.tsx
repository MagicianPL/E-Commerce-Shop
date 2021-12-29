import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { listProducts } from '../state/actions/productActions';
import Product from './Product';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductsContainer = () => {


    const productList = useSelector((state: any) => state.productList);
    const {loading, error, products} = productList;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <StyledWrapper>
            {loading ? <h1>Loading Data...</h1>
            : error ? <p>Sorry, something went wrong :(</p>
            :
            products.map((product: any) => <Product key={product._id} product={product} />)}
        </StyledWrapper>
    );
};

export default ProductsContainer;