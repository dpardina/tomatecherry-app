import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, price, measure, image } = product;

  return (
    <React.Fragment>
      <Link to={{pathname: `/product/${id}`, state: {test:'test'}}}>
      <img src={image} className="card-img-top" alt={name} />
      </Link>
      <h4 className="card-title p-2">{name}</h4>
      <h5 className="torta-precio p-2 mb-0">${price} por {measure}</h5>
    </React.Fragment>
  );
};

export default Item;