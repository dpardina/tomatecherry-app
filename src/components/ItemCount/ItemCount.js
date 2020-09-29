import React, { useState } from "react";
import './ItemCount.scss';

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
        <span onChange={() => onAdd(counter)}>{counter}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;