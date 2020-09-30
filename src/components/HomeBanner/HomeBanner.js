import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeBanner.scss';

const HomeBanner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 text-center phrase">
                        <h1 className="mb-4">De nuestra casa<br/>a la tuya</h1>
                        <h2 className="pt-4">A un click de distancia</h2>
                        <NavLink to={'/products'} className="btn">Ver Productos</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;