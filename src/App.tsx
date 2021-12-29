import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Header from './components/Header';
import StyledHeroBg from './components/StyledHeroBg';
import ProductsContainer from './components/ProductsContainer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import StyledMainWrapper from './components/StyledMainWrapper';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <StyledHeroBg />
      <StyledMainWrapper>
      
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
        </Routes>
        </StyledMainWrapper>
      </Router>
      
      </ThemeProvider>
    </div>
  );
}

export default App;
