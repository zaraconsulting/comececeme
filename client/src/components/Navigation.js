import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="header-menu">
                <button className="header-menu-toggle" type="button"><i className="fa fa-bars"></i>MENU</button>
                <ul>
                    <li className="m-active">
                        <span><Link to="/">Home</Link></span>
                    </li>
                    <li>
                        <span><Link to="/about-us">About Us</Link></span>
                    </li>
                    <li>
                        <span><Link to="/gallery">Gallery</Link></span>
                    </li>
                    <li>
                        <span><Link to="/services">Services</Link></span>
                    </li>
                    <li>
                        <span><Link to="/shop/products">Shop</Link></span>
                        <ul className="sub-menu">
                            <li><Link to="/shop/products">Products</Link></li>
                            <li><Link to="/shop/cart">Cart</Link></li>
                            <li><Link to="shop-checkout.html">Checkout</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span><Link to="/contact">Contact</Link></span>
                    </li>
                </ul>
            </nav>
        )
    }
}
