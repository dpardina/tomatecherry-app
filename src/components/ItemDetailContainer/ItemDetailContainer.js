import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ product }) => {
  const { title } = product;

  return (
    <React.Fragment>
      <div className="row">
        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
          <h2>{title}</h2>
          <p>Hacé tu pedido con 48 horas de anticipación.</p>
        </div>
      </div>
      <div className="product-detail row">
        <ItemDetail product={product} />
      </div>
    </React.Fragment>
  );
};

export default ItemDetailContainer;