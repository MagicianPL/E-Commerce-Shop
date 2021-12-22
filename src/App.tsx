import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme'
import Header from './components/Header';
import StyledHeroBg from './components/StyledHeroBg';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <StyledHeroBg />
        <Product />
      </ThemeProvider>
    </div>
  );
}

export default App;
