import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header className="header_area header_four header_five">
                <div className="container-fluid p-0">
                    {/* <!--header top start-->  */}
                    <div className="header_top">
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7 col-md-12">
                                <div className="left_info">
                                    <ul>
                                        <li><a href="index.html"><i className="fa fa-phone"></i> +1 (555) 555-5555</a></li>
                                        <li><a href="index.html"><i className="fa fa-envelope-open-o"></i> comececeme@gmail.com</a></li>
                                        <li>
                                            <div className="header_social">
                                                <ul>
                                                    <li><a href="index.html"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="index.html"><i className="fa fa-twitter"></i></a></li>
                                                    {/* <!-- <li><a href="index.html"><i className="fa fa-rss"></i></a></li>
                                                    <li><a href="index.html"><i className="fa fa-google-plus"></i></a></li>
                                                    <li><a href="index.html"><i className="fa fa-linkedin"></i></a></li> --> */}
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right_info text-right">
                                    <ul>
                                        <li className="currency"><a href="index.html">USD <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="index.html"> PESO</a></li>
                                                
                                                
                                            </ul>     
                                        </li> 
                                        <li className="language"><a href="index.html"> English  <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_language">
                                                
                                                
                                                <li><a href="index.html">Spanish</a></li>
                                            </ul> 
                                        </li> 
                                        <li className="top_links"><a href="index.html">My Account <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_links">
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="cart.html">Cart </a></li>
                                                <li><a href="index.html">Wishlist</a></li>
                                                <li><a href="login-register.html">Log In</a></li>
                                            </ul>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>      
                    {/* <!--header top end--> */}
                    
                    {/* <!--header bottom start-->  */}
                    <div className="header_bottom sticky-header">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="index.html"><img src="https://via.placeholder.com/94/stuff.png?text=Logo" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main_menu_inner">
                                    <div className="main_menu d-none d-lg-block"> 
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="index.html">Shop<i className="fa fa-angle-down"></i></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="shop.html">Store</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="index.html">My Account <i className="fa fa-angle-down"></i></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="account.html">Dashboard</a></li>
                                                    
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="login-register.html">Login/Register</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li><a href="https://styleseat.com/" target="_blank" rel="noopener noreferrer">Booking</a></li>
                                            <li><a href="faqs.html">FAQS</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>

                                    </div>
                                    <div className="mobile-menu d-lg-none">
                                        <nav>  
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="">Shop<i className="fa fa-angle-down"></i></a>
                                                    <ul className="sub_menu pages">
                                                        <li><a href="shop.html">Store</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html">My Account <i className="fa fa-angle-down"></i></a>
                                                    <ul className="sub_menu pages">
                                                        <li><a href="account.html">Dashboard</a></li>
                                                        
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="login-register.html">Login/Register</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li><a href="https://styleseat.com/" target="_blank" rel="noopener noreferrer">Booking</a></li>
                                                <li><a href="faqs.html">FAQS</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </nav>      
                                    </div>
                                </div>    
                            </div>
                            <div className="col-lg-4">
                                <div className="search_area search_four search_five">
                                    <div className="search_dropdown">
                                       <a className="search_button" href="index.html"><i className="fa fa-search"></i></a>
                                    </div>         
                                    <div className="shopping_cart cart_four">
                                        <a href="index.html"><i className="fa fa-shopping-cart"></i></a>

                                         {/* <!--mini cart--> */}
                                         <div className="mini_cart">
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <a href="cart.html"><img src="assets/img/cart/cart1.jpg" alt="" /></a>
                                               </div>
                                                <div className="cart_info">
                                                    <a href="index.html">Cart Product #1</a>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href="index.html"><i className="fa fa-times-circle"></i></a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <a href="cart.html"><img src="assets/img/cart/cart2.jpg" alt="" /></a>
                                               </div>
                                                <div className="cart_info">
                                                    <a href="index.html">Cart Product #2</a>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href="index.html"><i className="fa fa-times-circle"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="total_price">
                                                <span> Subtotal:  </span>
                                                <span className="prices">  $160.00  </span>
                                            </div>
                                            <div className="cart_button">
                                                <a href="checkout.html"> Check out</a>
                                                <a href="cart.html"> View Cart</a>
                                            </div>
                                        </div>
                                        {/* <!--mini cart end--> */}
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--search dropdown--> */}
                    <div className="hover_search">
                        <form action="#">
                            <input placeholder="Search product or keyword..." type="text" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <div className="close_btn"><a href="index.html"><i className="zmdi zmdi-close"></i></a></div>

                    </div>  
                    {/* <!--header bottom end-->    */}
                </div>  
            </header>
        )
    }
}
