import React from 'react';
import './CartIcon.scss';

function CartIcon(props) {
    return (
        <div className="cart-icon-container">
            <i className="fas fa-shopping-cart" />
            <span className="badge" id="lblCartCount"> 
                {props.numberItemsAdded}
            </span>
        </div>
    )
}

export default CartIcon;