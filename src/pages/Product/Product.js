import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Loading from "../../components/Loading/Loading";
import dataProducts from "../../data/data";
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(dataProducts);
      }, 1000);
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
    <div id="productos">
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
        <div className="product-item mb-5">
          {products
          .filter(product => product.id === id)
          .map((product) => (
            <div key={product.id} className="container">
              <ItemDetailContainer
                product={product}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;