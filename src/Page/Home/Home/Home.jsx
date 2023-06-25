import React from 'react';
import Banner from '../Banner/Banner';
import ServiceNav from '../ServiceNav/ServiceNav';
import Excellence from '../Excellence/Excellence';

const Home = () => {
    return (
        <div className='container mx-auto overflow-hidden'>
            <Banner></Banner>
            <ServiceNav></ServiceNav>
            <Excellence></Excellence>
            <h1>home</h1>
        </div>
    );
};

export default Home;