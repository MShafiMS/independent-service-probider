import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <Banner></Banner>
                <Services></Services>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;