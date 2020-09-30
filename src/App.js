import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext'

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route path='/products/:id' component={Product} />
            <Route path='/cart' component={Cart} />
            <Route path='/wishlist' component={Wishlist} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;