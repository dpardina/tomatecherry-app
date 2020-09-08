import React from 'react';
import ItemCount from "./ItemCount";
import Products from './Item';

export default function ItemList() {

    const listProducts = async () => await Products;

    return (
        <div className="carousel row">
            {Object.keys(listProducts).map((element => {
                return (
                    <div key={element.id} id={element.id} className="card text-center col-12 col-md-4 mb-5">
                        <img src={element.image} className="card-img-top" alt={element.name} />
                        <h4 className="card-title p-2">{element.name}</h4>
                        <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                            <h5 className="card-text">${element.price} por Unidad</h5>
                            <ItemCount initial="0" min="0" max={element.stock} />
                        </div>
                    </div>
                );
            }))}
        </div>
    )
}