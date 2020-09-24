import React from "react";
import { NavLink } from "react-router-dom";

const ItemListGeneral = ({ product }) => {
  const { id, name, price, measure, image } = product;

  return (
    <React.Fragment>
      <NavLink to={{pathname: `/tortasytartas/${id}`, state: {test:'test'}}}>
        <img src={image} className="card-img-top" alt={name} />
      </NavLink>
      <h4 className="card-title p-2">{name}</h4>
      <div className="precio-producto d-flex flex-wrap justify-content-around align-items-center p-2">
        <h5 className="card-text">${price} por {measure}</h5>
        <NavLink to={{pathname: `/tortasytartas/${id}`}} className="btn">
            COMPRAR
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default ItemListGeneral;