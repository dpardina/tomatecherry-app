import React from 'react';
import ItemList from "../../components/ItemList/ItemList";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import './Home.scss';

const Home = ({ onAdd }) => {
    return (
        <div id="home">
            <HomeBanner />

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