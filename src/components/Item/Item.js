import React from "react";

const Item = ({ product }) => {
  const { name, price, measure, image } = product;

  return (
    <React.Fragment>
      <img src={image} className="card-img-top" alt={name} />
      <h4 className="card-title p-2">{name}</h4>
      <h5 className="torta-precio p-2 mb-0">${price} por {measure}</h5>
    </React.Fragment>
  );
};

export default Item;