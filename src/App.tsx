import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
import Default from './Pages/Default';

const App = (props) => {
  return <Router>
      <Home path="/products" />
      <Product path="/products/:productId" />
      <Checkout path="/cart" />
      <Default default />
    </Router>
}

export default App;
