import React, { useContext } from "react";
import { CartContext } from '../../context/cartContext';
import { NavLink } from 'react-router-dom';
import './Cart.scss';

export default function Cart(props) {
    const [cart] = useContext(CartContext);

    const subtotal = (amount, price) => {
        let sub = amount*price;
        return sub;
    }

    return (
        <div id="cart">
            <div className="row">
                <div className="cart-title text-center mb-5 col-md-6 mx-auto">
                    <h2>Carrito</h2>
                </div>
            </div>

            {(cart.length === 0) ? (
                <div className="container">
                    <p>No hay Productos en el carrito.</p>
                    <NavLink to={'/tortasytartas'} className="btn">Ver Productos</NavLink>
                </div>
            ) : (
            <div>  
            <div className="container items-carrito-container">
                <div className="item-carrito-header row p-3">
                    <h5 className="col-4">Producto</h5>
                    <h5 className="col-2">Precio</h5>
                    <h5 className="col-2">Cantidad</h5>
                    <h5 className="col-2">Subtotal</h5>
                </div>
                {cart.map((item) => (
                    <div className="item-carrito row p-3" key={item.id}>
                        <div className="item-name col-4">{item.name}</div>
                        <div className="item-price col-2">${item.price}</div>
                        <div className="item-amount col-2">{cart.length} {item.measure}</div>
                        <div className="item-subtotal col-2">${subtotal(cart.length, item.price)}</div>
                        <div className="item-delete col-2">
                            <button><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container text-right mt-5">
                <h4>Total: $</h4> 
            </div>
            <div className="container text-right mt-5">
                <button className="btn">Checkout</button>
            </div>
            </div>
            )}
        </div>
    );
}