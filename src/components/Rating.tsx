import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    gap: 3px;
    color: #BF953F;
    align-items: center;

    span {
        margin: 0 0 0 6px;
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

interface IProps {
    rating: number;
    reviews: number;
}

const Rating: React.FC<IProps> = ({rating, reviews}) => {
    
    return (
        <StyledWrapper>
            <i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? "fa fa-star-half-o" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half-o" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? "fa fa-star-half-o" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? "fa fa-star-half-o" : "fa fa-star-o"} aria-hidden="true"></i>
            <i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"} aria-hidden="true"></i>
            <span>{`${reviews} reviews`}</span>
        </StyledWrapper>
    );
};

export default Rating;