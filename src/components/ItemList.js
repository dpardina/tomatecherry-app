import React from 'react';
import ItemCount from "./ItemCount";
import products from './Item';
import chocotorta from '../assets/img/chocotortabrownie.jpg';
import mixbrownie from '../assets/img/mix-brownie.jpg';
import cherrymix from '../assets/img/cherrymix.jpg';

export default function ItemList() {
    const productsId = products.map((product) => product.id);
    const productsNames = products.map((product) => product.name);
    const productsPrices = products.map((product) => product.price);
    const productsStock = products.map((product) => product.stock);

    return  <div id={productsId[0]} className="card text-center col-12 col-md-4 mb-5">
                <img src={chocotorta} className="card-img-top" alt="Cherrymix" />
                <h4 className="card-title p-2">{productsNames[0]}</h4>
                <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                    <h5 className="card-text">${productsPrices[0]} por Unidad</h5>
                    <ItemCount initial="0" min="0" max={productsStock[0]} />
                </div>
            </div>
}