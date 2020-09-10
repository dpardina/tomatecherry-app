import React, { useState, useEffect } from 'react';
import ItemCount from "./ItemCount";
import Products from './Item';

export default function ItemList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Products
        .then(res => {
            setData(res);
        })
    }, [])

    return (
        <div className="carousel row">
            {data.map((item) => {
                return (
                    <div key={item.id} id={item.id} className="card text-center col-12 col-md-4 mb-5">
                        <img src={item.image} className="card-img-top" alt={item.name} />
                        <h4 className="card-title p-2">{item.name}</h4>
                        <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                            <h5 className="card-text">${item.price} por Unidad</h5>
                            <ItemCount initial="0" min="0" max={item.stock} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}