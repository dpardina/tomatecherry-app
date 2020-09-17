import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <React.Fragment>
      <Item product={product} />
      <ItemCount initial={1} min={0} max={product.stock} onAdd={onAdd} />
    </React.Fragment>
  );
};

export default ItemDetail;