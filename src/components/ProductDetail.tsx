import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { IProps } from './Product';
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
    
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState<IProps["product"] | null>(null);
    const [loading, setLoading] = useState<any>(false);
    const [error, setError] = useState<any>(false);

    const [qty, setQty] = useState(1);

    useEffect(()=>{
        const fetchProduct = async() => {
            await setLoading("Loading data, please wait...");

            try {
                const res = await fetch(`http://localhost:5000/api/products/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setProduct(data);
                    setLoading(false);
                } else if (res.status === 404) {
                    setError("Sorry, product not found");
                    setLoading(false);
                }
            } catch(err) {
                console.log(err);
                setError("Sorry, product not found");
                setLoading(false);
            }
            
        };
        fetchProduct();
    }, [id]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQty(Number(e.target.value));
    };

    const handleAddToCart = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    return (
        <>
        <StyledLink to="/">Back to result</StyledLink>
        {loading ? <h1>{loading}</h1>
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