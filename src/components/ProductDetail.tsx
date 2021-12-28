import React, { useState, useEffect } from 'react';
import { productDetails as getDetails } from '../state/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from './Rating';
import StyledButton from './StyledButton';

const StyledLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    display: block;
    font-size: 20px;
    cursor: pointer;
`;

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

        div:nth-child(1) {
            flex: 1.5;
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


const ProductDetail = () => {

    const productDetails = useSelector((state: any) => state.productDetails);
    const {loading, product, error} = productDetails;
    
    const {id} = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetails(id));
    }, [id, dispatch]);

    useEffect(()=>console.log(loading));

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQty(Number(e.target.value));
    };

    const handleAddToCart = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    return (
        <>
        <StyledLink to="/">Back to result</StyledLink>
        {loading ? <h1>Loading data, please wait...</h1>
        : error ? <h1>{error}</h1>
        : product ?
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
                {product.countInStock > 0 &&
                <>
                <label htmlFor="qty">Qty:</label>
                <select onChange={handleSelectChange} id="qty">
                    {[...Array(product.countInStock).keys()].map(
                        x => <option key={x+1} value={x+1}>{x+1}</option>
                    )}
                </select>
                <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>
                </>
                }
                
            </div>
        </Wrapper>
        : null}
        </>
    );
};

export default ProductDetail;