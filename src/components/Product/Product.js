import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Loading from "../Loading/Loading";
import dataProducts from "../../data/data";

const Product = ({ onAdd }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getProducts = () => {
    return new Promise((res, rej) => {
        res(dataProducts);
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
    <div>
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
        <div className="carousel row">
          {products.filter(product => product.id === id).map((prod) => (
              <ItemDetailContainer
                key={prod.id}
                product={prod}
                onAdd={onAdd}
                />
          ))
          }
        </div>
      )}
    </div>
  );
};

export default Product;