import React from 'react';
import ItemList from "../../components/ItemList/ItemList";
import './Home.scss';

const Home = ({ onAdd }) => {
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
                    <ItemList onAdd={onAdd} />
                </div>
            </div>

        </div>
    );
}

export default Home;