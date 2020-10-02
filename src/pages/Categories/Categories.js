import React from 'react';
import ItemListCategory from "../../components/ItemListCategory/ItemListCategory";
import './Categories.scss';

const Categories = () => {
    return (
        <div id="categories">   
            <div className="productos mb-5">
                <div className="container">
                    <div className="row">
                        <div className="productos-title text-center mb-5 col-md-6 mx-auto">
                            <h2>Nuestros Productos</h2>
                            <p>Hacé tu pedido con 48 horas de anticipación.</p>
                        </div>
                    </div>
                    <ItemListCategory />
                </div>
            </div>
        </div>    
    );
}

export default Categories;