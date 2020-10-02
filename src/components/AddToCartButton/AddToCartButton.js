import React, { useEffect, useContext } from "react";
import { CartContext } from '../../context/cartContext';

function AddToCartButton({ product, count }) {
    const { id, title, price, measure } = product;
    const [cart, setCart] = useContext(CartContext)

    const AddToCart = () => {
        const item = {id, title, price, measure, count};
        setCart(currentCart => [...currentCart, item])
    }
    
    useEffect(() => {
        console.log(cart);
    }, [cart]);
  
    return (
        <button className="btn" onClick={AddToCart}>
          Agregar al carrito
        </button>
    );
}

export default AddToCartButton;