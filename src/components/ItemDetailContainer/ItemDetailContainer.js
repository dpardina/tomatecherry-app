import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = ({ product }) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  const getProduct = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(product);
      }, 1000);
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
    <Loading text="Cargando..." />
  ) : (
    <ItemDetail product={item} />
  );
};

export default ItemDetailContainer;