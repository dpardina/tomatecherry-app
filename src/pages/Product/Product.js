import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import { useParams } from 'react-router-dom';
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Loading from "../../components/Loading/Loading";
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item.get()
    .then((doc) => {
      if(!doc.exists) {
        console.log("Item does not exist!");
        return;
      }
      console.log('Item found!');
      setProduct({ id: doc.id, ...doc.data() });
    })
    .catch((error) => {
      console.log("Error searchin item: ", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <div id="productos">
      {loading ? (
        <Loading text="Cargando..." />
      ) : (
        <div className="product-item mb-5">
          <div key={product.id} className="container">
            <ItemDetailContainer
              product={product}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;