import React from 'react';
import './CartIcon.scss';

const CartIcon = ({ items }) => {
    return (
        <div className="cart-icon-container">
            <i className="fas fa-shopping-cart" />
            <span className="badge" id="lblCartCount">
                {items}
            </span>
        </div>
    )
}

export default CartIcon;