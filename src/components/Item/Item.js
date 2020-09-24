import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product, onAdd }) => {
  const { name, description, price, measure, image } = product;

  return (
    <React.Fragment>
      <div className="row">
        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
          <h2>{name}</h2>
          <p>Hacé tu pedido con 48 horas de anticipación.</p>
        </div>
      </div>
      <div className="product-detail row">
        <img src={image} className="col-12 col-md-8" alt={name} />
        <div className="product-info col-12 col-md-4 d-flex flex-column justify-content-around align-items-center">
          <p className="product-description text-justify p-3">{description}</p>
          <h5 className="product-price">${price} por {measure}</h5>
          <div className="product-shop">
          <ItemCount initial={1} min={0} max={product.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;