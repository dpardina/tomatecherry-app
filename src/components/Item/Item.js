import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  const { id, title, price, measure, image } = product;

  return (
    <React.Fragment>
      <NavLink to={`/products/${id}`}>
        <img src={image} className="card-img-top" alt={title} />
      </NavLink>
      <h4 className="card-title p-2">{title}</h4>
      <div className="precio-producto d-flex flex-wrap justify-content-around align-items-center p-2">
        <h5 className="card-text">${price} por {measure}</h5>
        <NavLink to={`/products/${id}`} className="btn">
            COMPRAR
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Item;