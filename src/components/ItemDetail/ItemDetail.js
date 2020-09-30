import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ItemDetail = ({ product }) => {
  const { name, price, measure, stock, image, description } = product;
  const [count, setCount] = useState(1);

  return (
    <React.Fragment>
      <img src={image} className="col-12 col-md-8" alt={name} />
      <div className="product-info col-12 col-md-4 d-flex flex-column justify-content-around align-items-center">
        <p className="product-description text-justify p-3">{description}</p>
        <h5 className="product-price">${price} por {measure}</h5>
        <div className="product-shop">
        <ItemCount min={0} max={stock} count={count} setCount={setCount} />
        <AddToCartButton product={product} count={count} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;