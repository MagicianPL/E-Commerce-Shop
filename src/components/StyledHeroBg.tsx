import styled from 'styled-components';
import hero from '../assets/hero.jpg';

const StyledHeroBg = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${hero});
    background-position: center;
    opacity: 0.7;
    position: relative;
    margin-bottom: 30px;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({theme}) => theme.colors.tertiary};
        opacity: 0.3;
    }
`;

export default StyledHeroBg;