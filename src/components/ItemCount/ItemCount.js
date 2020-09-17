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
    <div className="general-count d-flex justify-content-around pb-3">
      <div className="count col-4 d-flex justify-content-around">
        <button onClick={handleDecrement}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button
        className="btn col-4 text-center"
        disabled={counter === 0 || counter < 0 ? true : false}
        onClick={() => onAdd(counter)}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;