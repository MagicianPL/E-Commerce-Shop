import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 290px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.colors.secondary};
    margin: 10px;

    img {
        width: 100%;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .body {
        padding: 10px;

        * {
            margin-bottom: 7px;
        }
    }
`;

const Product = () => {
    return(
        <StyledWrapper>
            <img src="./images/p1.jpg" alt="xxx" />
            <div className="body">
                <p>NameOfProd</p>
                <p>120 $</p>
            </div>
        </StyledWrapper>
    );
};

export default Product;