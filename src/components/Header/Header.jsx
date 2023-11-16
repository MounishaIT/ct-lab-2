import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    const changeCategory = (category) => {
        dispatch(handleCategory(category));
        navigate('/shop')
    }
    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    }
    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    }
    return (
        <header className='bg-white'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo-part pe-4">
                        <Link to="/"><img src="https://cdn.vectorstock.com/i/preview-1x/09/76/cake-shop-logo-with-lettering-composition-vector-34250976.webp%22%20alt=%22logo%22%20/%3E%3C/Link%3E%20%3C/div%3E" alt="logo" /></Link>
                        </div>
                        <ul className='dekstop-nav list-unstyled m-0'>
                        <li><Link to="/Aboutus"><button className='clean-button'>About</button></Link></li>

                            <li><button className='clean-button' onClick={() => { changeCategory("All") }}>All Items</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Trending cakes") }}>Trending cakes</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Designer cakes") }}>Designer cakes</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Best seller") }}>Best seller</button></li>
                                                        <li><button className='clean-button' onClick={() => { changeCategory("Cookies") }}>Cookies</button></li>
                                                        <li><button className='clean-button' onClick={() => { changeCategory("Sweets") }}>Diwali Specials</button></li>

                            <li><Link to="/LoginPage"><button className='clean-button'>LogIn</button></Link></li>
                            <li><Link to="/Feedback"><button className='clean-button'>Feedback</button></Link></li>
                            <li><Link to="/Profile"><button className='clean-button'>Profile</button></Link></li>

               
                        </ul>
                    </div>
                    <div className="header-right">
                        <p className='price'>₹{getTotalPrice()}.00</p>
                        <div className='cart'>
                            <Link to="/cart"><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                        <div className="hamburger-menu">
                            {hamburger ? (<button onClick={() => { openHamburger() }}><GiHamburgerMenu /></button>) : (<button onClick={() => { closeHamburger() }}><IoCloseSharp /></button>)}
                        </div>
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                <li><button className='clean-button' onClick={() => { changeCategory("All") }}>All Items</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Trending cakes") }}>Trending cakes</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Designer cakes") }}>Designer cakes</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Best seller") }}>Best seller</button></li>
                                                        <li><button className='clean-button' onClick={() => { changeCategory("Cookies") }}>Cookies</button></li>
                                                        <li><button className='clean-button' onClick={() => { changeCategory("Sweets") }}>Diwali Specials</button></li>

                           
            </ul>
        </header>
    )
}

export default Header;