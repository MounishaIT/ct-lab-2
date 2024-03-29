import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./cartPayment.scss";
const CartPayment = () => {
    const cart = useSelector((state) => state.cart.cart);
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
    return (
        <div className="cart-payment">

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="cart-head d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">{getTotalQuantity()} items</h6>
                                            </div>

                                            <div className="cart-products">
                                                {cart.map((item) => (
                                                    <CartItem
                                                        key={item.id}
                                                        item={item}
                                                        quantity={item.quantity}
                                                        image={item.image}
                                                        title={item.title}
                                                        category={item.category}
                                                        price={item.price}
                                                    />
                                                ))}
                                            </div>

                                            <div className="pt-5 back-shop">
                                                <h6 className="mb-0"><Link to="/shop"><HiOutlineArrowNarrowLeft />Back to Shop</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg">
                                        <div className="p-5">
                                        <img
                                                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXN8ZW58MHx8MHx8fDA%3D"
                                                alt="Cart"
                                                style={{ width: '200px', height: '300px' }} // Adjust the width and height as needed
                                            />
                                            <br />
                                            {/* <h5 className="text-uppercase mb-3">Give code</h5> */}

                                            {/* <div className="mb-5 cart-head">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                </div>
                                            </div> */}
                                            
<br></br><hr></hr>



                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>₹ {getTotalPrice()}.00</h5>
                                            </div>
                                            <button type="button" className="general-button"><Link to="/Login">Proceed To Checkout</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPayment