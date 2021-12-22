import React from 'react';
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
    return (
        <StyledWrapper>
            {data.products.map((product: any) => <Product product={product}/>)}
        </StyledWrapper>
    );
};

export default ProductsContainer;