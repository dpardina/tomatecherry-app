import React from "react";
import Item from "../Item/Item";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <React.Fragment>
      <Item product={product} onAdd={onAdd} />
    </React.Fragment>
  );
};

export default ItemDetail;