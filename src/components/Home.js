import React from 'react';
import '../assets/styles/Home.scss';

function Home(props) {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 text-center phrase">
                        <h1 className="mb-4">{props.greeting1}<br />{props.greeting2}</h1>
                        <h2 className="pt-4">A un click de distancia</h2>
                        <a href="productos.hmtl" className="btn" target="_blank">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;