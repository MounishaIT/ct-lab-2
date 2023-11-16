import React from 'react';
import Hero from './components/Hero/Hero';
import HomeCollection from './components/HomeCollection/HomeCollection';
import Gallery from './components/HomeGallery/Gallery';
import HomeSale from './components/HomeSale/HomeSale';
import HomeServices from './components/HomeServices/HomeServices';
import HomeProducts from './components/HomeProducts/HomeProducts';
import Testimonials from './components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HomeProducts />

        
            

            <HomeServices />
            <HomeSale />
            
            <Testimonials />
            <Gallery/>
        </div>
    )
}

export default Home;