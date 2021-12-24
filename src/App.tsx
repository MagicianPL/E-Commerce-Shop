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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <StyledHeroBg />
      <Router>
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
