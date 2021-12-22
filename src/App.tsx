import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Header from './components/Header';
import StyledHeroBg from './components/StyledHeroBg';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <StyledHeroBg />
        <ProductsContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
