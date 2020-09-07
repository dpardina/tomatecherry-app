import React from 'react';
import ItemList from "./ItemList"
import '../assets/styles/Home.scss';

export default function Home(props) {
    return (
        <div id="home">

            {/* Banner */}
            <div className="banner">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center phrase">
                            <h1 className="mb-4">De nuestra casa<br/>a la tuya</h1>
                            <h2 className="pt-4">A un click de distancia</h2>
                            <a href="productos.hmtl" className="btn" target="_blank">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Destacados */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center pt-3 mb-4 col-md-6 mx-auto">
                            <h2>Productos Destacados</h2>
                        </div>
                    </div>
                    <div className="carousel row">
                        <ItemList />
                    </div>
                </div>
            </div>

        </div>
    );
}