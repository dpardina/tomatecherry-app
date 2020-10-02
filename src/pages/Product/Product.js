import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import { useParams } from 'react-router-dom';
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Loading from "../../components/Loading/Loading";
// import dataProducts from "../../data/data";
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  // const getProducts = () => {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(dataProducts);
  //     }, 1000);
  //   });
  // };

  // useEffect(() => {
  //   getProducts()
  //     .then((data) => {
  //       setItems(data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       console.log("rejected");
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(itemId);

    item.get().then((doc) => {
      if(!doc.exists) {
        console.log("Item does not exist!");
        return;
      }
      console.log('Item found!');
      setItems({ id: doc.id, ...doc.data() });
    }).catch((error) => {
      console.log("Error searchin items", error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div id="productos">
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
        <div className="product-item mb-5">
          {items
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