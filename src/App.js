import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  // Contador del carrito
  const [items, setItems] = useState(0);

  // Funcion que suma elementos al contador del carrito
  const onAdd = (counter) => {
    setItems(items + counter);
  };

  return (
    <div>
      <Navbar items={items} />
      <Home onAdd={onAdd} />
    </div>
  );
}

export default App;