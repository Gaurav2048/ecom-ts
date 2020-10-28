import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      <Home path="/products" />
      <Product path="/products/:productId" />
    </Router>
  );
}

export default App;
