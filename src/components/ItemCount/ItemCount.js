import React, { useState } from "react";
import './ItemCount.scss';
import { NavLink } from "react-router-dom";

const ItemCount = ({ initial, min, max, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleIncrement = () => {
    counter < max ? setCounter(counter + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    counter > min ? setCounter(counter - 1) : console.log("Mínimo alcanzado");
  };

  return (
    <div className="general-count d-flex flex-column">
      <div className="count row">
        <button onClick={handleDecrement}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button
        className="btn"
        disabled={counter === 0 || counter < 0 ? true : false}
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </button>
      <NavLink to={{pathname: `/cart`}} className="btn">Comprar {counter}</NavLink>
    </div>
  );
};

export default ItemCount;