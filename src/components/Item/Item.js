import React, { useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/cartContext';

const Item = ({ product }) => {
  const { id, name, price, measure, stock, image, description } = product;
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const item = {id, name, price, measure};
    setCart(currentCart => [...currentCart, item])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <React.Fragment>
      <img src={image} className="col-12 col-md-8" alt={name} />
      <div className="product-info col-12 col-md-4 d-flex flex-column justify-content-around align-items-center">
        <p className="product-description text-justify p-3">{description}</p>
        <h5 className="product-price">${price} por {measure}</h5>
        <div className="product-shop">
        <ItemCount initial={1} min={0} max={stock} />
        <button className="btn" onClick={addToCart}>Agregar al carrito</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;