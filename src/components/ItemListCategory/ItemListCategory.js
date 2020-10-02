import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

const ItemListCategory = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const cat = itemCollection.where('categoryId', '==', categoryId);
    cat.get()
    .then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log("No results!");
      }
      setItems(querySnapshot.docs.map(doc => {
        return ({ id: doc.id, ...doc.data() });
      }));
    })
    .catch((error) => {
      console.log("Error searching items.", error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [categoryId]);


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

export default ItemListCategory;