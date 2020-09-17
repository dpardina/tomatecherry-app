import React from 'react';
import CartIcon from "../CartIcon/CartIcon";
import WishlistIcon from "../WishlistIcon/WishlistIcon";
import logo from '../../assets/img/logo.png';
import './NavBar.scss';

const Navbar = ({ items }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="nav">
            <div className="container">
                <a className="navbar-brand" href="index.html"><img src={logo} style={{width: '3.5rem'}} alt="Logo Tomate Cherry" /></a>
                <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon" />
                </button>            
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto text-center text-uppercase">
                            <li className="nav-item px-2 dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="productos.html" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span>Productos</span>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="tortas-y-tartas.html">Tortas y Tartas</a>
                                    <a className="dropdown-item" href="cookies-y-alfajores.html">Cookies y Alfajores</a>
                                    <a className="dropdown-item" href="budines-y-muffins.html">Budines y Muffins</a>
                                    <a className="dropdown-item" href="cuadrados.html">Cuadrados</a>
                                    <a className="dropdown-item" href="panaderia.html">Panadería</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="cherry-mix.html">Cherry Mix</a>
                                    <a className="dropdown-item" href="desayunos.html">Desayunos</a>
                                    <a className="dropdown-item" href="kits.html">Kits</a>
                                    <a className="dropdown-item" href="mesa-dulce.html">Mesa Dulce</a>
                                </div>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="nosotras.html">
                                    <span>Nosotras</span>
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="contacto.html">
                                    <span>Contacto</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-row justify-content-around">
                            <li className="nav-item px-2">
                                <a className="nav-link user-icon" href="user.html">
                                    <i className="fas fa-user" />
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link user-icon" href="wishlist.html">
                                    <WishlistIcon items={items} />
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link user-icon" href="shopping-cart.html">
                                    <CartIcon items={items} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;