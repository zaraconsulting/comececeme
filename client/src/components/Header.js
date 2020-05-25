import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header id="header" className="m-animated">
                <div className="header-bg">
                    <div className="header-inner">

                        {/* <!-- HEADER BRANDING : begin --> */}
                        <div className="header-branding">
                            <a href="index.html">
                                <img src="https://placehold.it/300x90" alt="BeautySpot" data-hires="https://placehold.it/300x90" width="291" />
                            </a>
                        </div>
                        {/* <!-- HEADER BRANDING : end --> */}

                        {/* <!-- HEADER NAVIGATION : begin --> */}
                        <div className="header-navigation">

                            {/* <!-- HEADER MENU : begin --> */}
                            <Navigation />
                            {/* <!-- HEADER MENU : end --> */}

                            {/* <!-- HEADER CART : begin --> */}
                            <div className="header-cart">
                                <div className="header-cart-inner">
                                    <Link to="/shop/cart"><i className="cart-ico fa fa-shopping-cart"></i><span className="cart-label">Cart</span><span className="cart-count">(3 items)</span></Link>
                                </div>
                            </div>
                            {/* <!-- HEADER CART : end --> */}

                            {/* <!-- HEADER SEARCH : begin --> */}
                            <div className="header-search">
                                <div className="header-search-inner">
                                    <form className="search-form" action="search-results.html">
                                        <i className="search-ico fa fa-search"></i>
                                        <input className="search-input" type="text" placeholder="Search for..." />
                                        <button className="search-submit" type="submit"><i className="fa fa-angle-right"></i></button>
                                        <button className="search-toggle" type="button">Search</button>
                                    </form>
                                </div>
                                <button className="search-toggle-mobile" type="button"><i className="fa"></i></button>
                            </div>
                            {/* <!-- HEADER SEARCH : end --> */}

                        </div>
                        {/* <!-- HEADER NAVIGATION : end --> */}

                        {/* <!-- HEADER PANEL : begin --> */}
                        <div className="header-panel">

                            <button className="header-panel-toggle" type="button"><i className="fa"></i></button>

                            {/* <!-- HEADER RESERVATION : begin --> */}
                            <div className="header-reservation">
                                <a href="ajax/reservation-form.html" className="c-button m-open-ajax-modal">Make a Reservation</a>
                            </div>
                            {/* <!-- HEADER RESERVATION : end --> */}

                            {/* <!-- HEADER CONTACT : begin --> */}
                            <div className="header-contact">
                                <ul>

                                    {/* <!-- PHONE : begin --> */}
                                    <li>
                                        <div className="item-inner">
                                            <i className="ico fa fa-phone"></i>
                                            <strong>773 822 3445</strong>
                                        </div>
                                    </li>
                                    {/* <!-- PHONE : end --> */}

                                    {/* <!-- EMAIL : begin --> */}
                                    <li>
                                        <div className="item-inner">
                                            <i className="ico fa fa-envelope-o"></i>
                                            <a href="/">info@comececeme.com</a>
                                        </div>
                                    </li>
                                    {/* <!-- EMAIL : end --> */}

                                    {/* <!-- ADDRESS : begin --> */}
                                    <li>
                                        <div className="item-inner">
                                            <i className="ico fa fa-map-marker"></i>
                                            <strong>COMECECEME</strong><br />
                                                8100 S Stony Island Avenue<br />
                                                Chicago, IL 60617
                                            </div>
                                    </li>
                                    {/* <!-- ADDRESS : end --> */}

                                    {/* <!-- HOURS : begin --> */}
                                    <li>
                                        <div className="item-inner">
                                            <i className="ico fa fa-clock-o"></i>
                                            <dl>
                                                <dt>Mo. - Fr.:</dt>
                                                <dd>10:00 - 16:00</dd>
                                                <dt>Sa.:</dt>
                                                <dd>10:00 - 14:00</dd>
                                                <dt>Su.:</dt>
                                                <dd>Closed</dd>
                                            </dl>
                                        </div>
                                    </li>
                                    {/* <!-- HOURS : end --> */}

                                </ul>
                            </div>
                            {/* <!-- HEADER CONTACT : end --> */}

                            {/* <!-- HEADER SOCIAL : begin --> */}
                            <div className="header-social">
                                <ul>
                                    <li><a href="/" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- HEADER SOCIAL : end --> */}

                        </div>
                        {/* <!-- HEADER PANEL : end --> */}

                    </div>
                </div>
            </header>
        )
    }
}
