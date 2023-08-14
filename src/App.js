import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProducDetailPage from './pages/ProducDetailPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProducDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
