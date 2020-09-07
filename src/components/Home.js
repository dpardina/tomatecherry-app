import React from 'react';
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import '../assets/styles/Home.scss';
// import chocotorta from '../assets/img/chocotortabrownie.jpg';
// import mixbrownie from '../assets/img/mix-brownie.jpg';
// import cherrymix from '../assets/img/cherrymix.jpg';

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
                        {/* <div className="card text-center col-12 col-md-4 mb-5">
                            <img src={chocotorta} className="card-img-top" alt="Chocotorta" />
                            <h4 className="card-title p-2">Chocotorta Brownie</h4>
                            <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                                <h5 className="card-text">$1.170 por Unidad</h5>
                                <ItemCount initial="0" min="0" max="10" />
                            </div>
                        </div>
                        <div className="card text-center col-12 col-md-4 mb-5">
                            <img src={mixbrownie} className="card-img-top" alt="Mix Brownies" />
                            <h4 className="card-title p-2"><span style={{color: '#f75e5e', backgroundColor: 'white', padding: '1px 20px'}}><b>PROMO</b></span> Mix Brownies</h4>
                            <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                                <h5 className="card-text">$590 por Unidad</h5>
                                <ItemCount initial="0" min="0" max="10" />
                            </div>
                        </div>
                        <div className="card text-center col-12 col-md-4 mb-5">
                            <img src={cherrymix} className="card-img-top" alt="Cherrymix" />
                            <h4 className="card-title p-2">Cherrymix</h4>
                            <div className="d-flex flex-wrap justify-content-around align-items-center p-2 torta-precio">
                                <h5 className="card-text">$700 por Unidad</h5>
                                <ItemCount initial="0" min="0" max="10" />
                            </div>
                        </div> */}
                        <ItemList />
                    </div>
                </div>
            </div>

        </div>
    );
}