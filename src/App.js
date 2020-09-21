import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Product from "./components/ItemDetailTest/Product";

function App() {
  // Contador del carrito
  const [items, setItems] = useState(0);

  // Funcion que suma elementos al contador del carrito
  const onAdd = (counter) => {
    setItems(items + counter);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar items={items} />
        <Switch>
          <Route exact path='/'>
            <Home onAdd={onAdd} />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/wishlist'>
            <Wishlist />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;