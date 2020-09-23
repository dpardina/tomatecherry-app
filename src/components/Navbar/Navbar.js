import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from "../CartIcon/CartIcon";
import WishlistIcon from "../WishlistIcon/WishlistIcon";
import logo from '../../assets/img/logo.png';
import './NavBar.scss';

const Navbar = ({ items }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="nav">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">
                    <img src={logo} style={{width: '3.5rem'}} alt="Logo Tomate Cherry" />
                </NavLink>
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
                                    <NavLink to={'/tortasytartas'} className="dropdown-item">Tortas y Tartas</NavLink>
                                    <a className="dropdown-item disabled" href="cookies-y-alfajores.html">Cookies y Alfajores</a>
                                    <a className="dropdown-item disabled" href="budines-y-muffins.html">Budines y Muffins</a>
                                    <a className="dropdown-item disabled" href="cuadrados.html">Cuadrados</a>
                                    <a className="dropdown-item disabled" href="panaderia.html">Panadería</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item disabled" href="cherry-mix.html">Cherry Mix</a>
                                    <a className="dropdown-item disabled" href="desayunos.html">Desayunos</a>
                                    <a className="dropdown-item disabled" href="kits.html">Kits</a>
                                    <a className="dropdown-item disabled" href="mesa-dulce.html">Mesa Dulce</a>
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
                                <NavLink to={'/wishlist'} className="nav-link user-icon">
                                    <WishlistIcon />
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to={'/cart'} className="nav-link user-icon">
                                    <CartIcon items={items} />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;