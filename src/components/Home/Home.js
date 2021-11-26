import React from 'react';
import Banner from '../Banner/Banner';
import AllTours from '../AllTours/AllTours';
import TopRated from '../TopRated/TopRated';
import Feedback from '../Feedback/Feedback';
import './Home.css';
/* --------------------------------------------
 -----Showing home component------------
 ---------------------------------------------*/
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <h1>Our Helicopter Tours</h1>
            <AllTours></AllTours>
            <h1>Feedback from Travellers</h1>
            <Feedback></Feedback>
            <h1>Top Rated Tours</h1>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;