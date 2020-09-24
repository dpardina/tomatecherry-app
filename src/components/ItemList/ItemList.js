import React, { useState, useEffect } from "react";
import ItemListGeneral from "../ItemListGeneral/ItemListGeneral";
import Loading from "../Loading/Loading";
import dataProducts from "../../data/data";

const ItemList = ({ onAdd }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(dataProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        console.log("rejected");
      });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
      <div className="product-grid row">
        {products.map((product) => (
          <div key={product.id} className="text-center col-12 col-md-4 mb-5">
            <ItemListGeneral product={product} />
          </div>
        ))}
      </div>
      )}
    </React.Fragment>
  );
};

export default ItemList;