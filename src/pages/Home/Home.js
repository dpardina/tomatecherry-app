import React from 'react';
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import './Home.scss';

const Home = ({ onAdd }) => {
    return (
        <div id="home">
            <HomeBanner />
        </div>
    );
}

export default Home;