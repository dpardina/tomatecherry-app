import React, { useContext } from "react";
import { CartContext } from '../../context/cartContext';
import { NavLink } from 'react-router-dom';
import './Cart.scss';

export default function Cart() {
    const [cart] = useContext(CartContext);

    const subtotal = (count, price) => {
        let sub = count*price;
        return sub;
    }

    // const total = () => {

    // }

    // const delete = () => {

    // }

    return (
        <div id="cart">
            <div className="row">
                <div className="cart-title text-center mb-5 col-md-6 mx-auto">
                    <h2>Carrito</h2>
                </div>
            </div>

            {(cart.length === 0) ? (
                <div className="container">
                    <p>No hay productos en el carrito.</p>
                    <NavLink to={'/products'} className="btn">Ver Productos</NavLink>
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
                        <div className="item-title col-4">{item.title}</div>
                        <div className="item-price col-2">${item.price} por {item.measure}</div>
                        <div className="item-amount col-2">{item.count}</div>
                        <div className="item-subtotal col-2">${subtotal(item.count, item.price)}</div>
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