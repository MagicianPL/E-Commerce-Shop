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
import SignIn from './components/SignIn';
import ShippingAddress from './components/ShippingAddress';
import Register from './components/Register';
import Payment from './components/Payment';
import PlaceOrder from './components/PlaceOrder';
import PlacedOrderScreen from './components/PlacedOrderScreen';
import OrdersHistory from './components/OrdersHistory';
import Profile from './components/Profile';
import ScrollToTop from './helpers/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Header />
        <StyledHeroBg />
      <StyledMainWrapper>
      
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="shipping" element={<ShippingAddress />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<PlacedOrderScreen />} />
          <Route path="/history" element={<OrdersHistory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </StyledMainWrapper>
      </Router>
      
      </ThemeProvider>
    </div>
  );
}

export default App;
