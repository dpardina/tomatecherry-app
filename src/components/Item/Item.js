import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, price, measure, image } = product;

  return (
    <React.Fragment>
      <NavLink to={{pathname: `/torta/${id}`, state: {test:'test'}}}>
        <img src={image} className="card-img-top" alt={name} />
      </NavLink>
      <h4 className="card-title p-2">{name}</h4>
      <h5 className="torta-precio p-2 mb-0">${price} por {measure}</h5>
    </React.Fragment>
  );
};

export default Item;