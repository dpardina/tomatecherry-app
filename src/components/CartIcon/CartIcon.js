import React, { useContext } from 'react';
import './CartIcon.scss';
import { CartContext } from '../../context/cartContext';

const CartIcon = () => {
    const [cart] = useContext(CartContext);
    return (
        <div className="cart-icon-container">
            <i className="fas fa-shopping-cart" />
            <span className="badge" id="lblCartCount">
                {cart.length}
            </span>
        </div>
    )
}

export default CartIcon;