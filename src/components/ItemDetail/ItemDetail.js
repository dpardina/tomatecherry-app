import React from "react";
import Item from "../Item/Item";

const ItemDetail = ({ product }) => {
  const { name } = product;
  return (
    <React.Fragment>
      <div className="row">
        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
          <h2>{name}</h2>
          <p>Hacé tu pedido con 48 horas de anticipación.</p>
        </div>
      </div>
      <div className="product-detail row">
        <Item product={product} />
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;