import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = ({ product, onAdd }) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  const getProduct = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(product);
      }, 3000);
    });
  };

  useEffect(() => {
    getProduct()
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => console.log("rejected"));
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div className="text-center col-12 col-md-4">
      <Loading text="Cargando..." />
    </div>
  ) : (
    <div className="card text-center col-12 col-md-4">
      <ItemDetail product={item} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;