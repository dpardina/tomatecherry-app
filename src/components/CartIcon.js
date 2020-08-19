import React from 'react';
import '../assets/styles/CartIcon.scss';

class CartIcon extends React.Component {
    render() {
        return (
            <div>
                <i className="fas fa-shopping-cart" />
                <span className="badge" id="lblCartCount"> 
                    5
                </span>
            </div>
        );
    }
}

export default CartIcon;