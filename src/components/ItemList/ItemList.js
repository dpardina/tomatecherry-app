import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
// import dataProducts from "../../data/data";

const ItemList = ({ onAdd }) => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  // const getProducts = () => {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(dataProducts);
  //     }, 2000);
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
    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log("No results!");
      }
      setItems(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("Error searchin items", error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);


  return (
    <React.Fragment>
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
      <div className="product-grid row">
        {items.map((product) => (
          <div key={product.id} className="text-center col-12 col-md-4 mb-5">
            <Item product={product} />
          </div>
        ))}
      </div>
      )}
    </React.Fragment>
  );
};

export default ItemList;