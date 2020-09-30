import React from "react";
import './ItemCount.scss';

const ItemCount = ({ min, max, count, setCount }) => {

  const handleIncrement = () => {
    count < max ? setCount(count + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    count > min ? setCount(count - 1) : console.log("Mínimo alcanzado");
  };

  return (
    <div className="general-count d-flex flex-column">
      <div className="count row">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;