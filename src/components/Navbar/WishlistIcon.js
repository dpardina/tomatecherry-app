import React from 'react';
import '../../assets/styles/WishlistIcon.scss';

function WishlistIcon(props) {
    return (
        <div>
            <i className="fas fa-heart" />
            <span className="badge" id="lblWishCount"> 
                {props.numberItemsWishAdded}
            </span>
        </div>
    )
}

export default WishlistIcon;