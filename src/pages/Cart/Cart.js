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
                <form className="orden-compra form-group row p-3 mt-5">
                    <div className="orden-compra-datos col-6 d-flex flex-column">
                        <h4 className="p-2">Orden de Compra</h4>
                        <input className="form-control m-1 p-2" type="text" placeholder="Nombre" required />
                        <input className="form-control m-1 p-2" type="text" placeholder="Teléfono" required />
                        <input className="form-control m-1 p-2" type="email" placeholder="Correo Electrónico" required />
                    </div>
                    <div className="orden-compra-total col-6 d-flex flex-column my-auto">
                        <h4 className="p-2 align-self-center">Total: $</h4> 
                        <button className="btn align-self-center" type="submit">Checkout</button>
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}