import React from 'react';
import '../../assets/styles/CartIcon.scss';

function CartIcon(props) {
    return (
        <div>
            <i className="fas fa-shopping-cart" />
            <span className="badge" id="lblCartCount"> 
                {props.numberItemsAdded}
            </span>
        </div>
    )
}

export default CartIcon;