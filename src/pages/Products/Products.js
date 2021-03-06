import React from 'react';
import ItemList from "../../components/ItemList/ItemList";
import './Products.scss';

const Products = () => {
    return (
        <div id="products">   
            <div className="productos mb-5">
                <div className="container">
                    <div className="row">
                        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
                            <h2>Nuestros Productos</h2>
                            <p>Hacé tu pedido con 48 horas de anticipación.</p>
                        </div>
                    </div>
                    <ItemList />
                </div>
            </div>
        </div>    
    );
}

export default Products;