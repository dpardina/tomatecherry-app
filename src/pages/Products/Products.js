import React from 'react';
import ItemList from "../../components/ItemList/ItemList";
import './Products.scss';

const TortasYTartas = ({ onAdd }) => {
    return (
        <div id="tortasytartas">   
            <div className="productos mb-5">
                <div className="container">
                    <div className="row">
                        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
                            <h2>Nuestros Productos</h2>
                            <p>Hacé tu pedido con 48 horas de anticipación.</p>
                        </div>
                    </div>
                    <ItemList onAdd={onAdd} />
                </div>
            </div>
        </div>    
    );
}

export default TortasYTartas;