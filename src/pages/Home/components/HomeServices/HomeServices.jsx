import React from 'react'
import HomeServicesItem from './HomeServicesItem'


const HomeServices = () => {
    return (
        <div className="home-services page-container py-4">
            <div className="row justify-content-center" >
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/certificate-icon-p3wgqj83iftdfzntt865n2pg6gyhr6ui9h6ri1cwns.png'
                    title='No Preservatives'
                />
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/truck-p3wgmo3zeyixpp9wdk1de1t89g063zi8ecmwh3368o.png'
                    title='Fast Delivery'
                />
                
                
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/warranty-p3wgnefgqbiyqs7o3vexbv64w8eg3ieptywhwu05eg.png'
                    title='FSSAI Certified'
                />
            </div>
        </div>
    )
}

export default HomeServices