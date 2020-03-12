import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                        <li><Link to="/"><i className="fa fa-phone"></i> +1 (555) 555-5555</Link></li>
                                        <li><Link to="/"><i className="fa fa-envelope-open-o"></i> comececeme@gmail.com</Link></li>
                                        <li>
                                            <div className="header_social">
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right_info text-right">
                                    <ul>
                                        <li className="currency"><Link to="/">USD <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown_currency">
                                                <li><Link to="/"> PESO</Link></li>
                                                
                                                
                                            </ul>     
                                        </li> 
                                        <li className="language"><Link to="/"> English  <i className="fa fa-angle-down"></i></Link>
                                            <ul className="dropdown_language">
                                                
                                                
                                                <li><Link to="/">Spanish</Link></li>
                                            </ul> 
                                        </li> 
                                        <li className="top_links"><a href>My Account <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_links">
                                                <li><Link to="/checkout">Checkout</Link></li>
                                                <li><Link to="/cart">Cart </Link></li>
                                                <li><Link to="/">Wishlist</Link></li>
                                                <li><Link to="/authentication">Log In</Link></li>
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
                                    <Link to="/"><img src="https://via.placeholder.com/94/stuff.png?text=Logo" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main_menu_inner">
                                    <div className="main_menu d-none d-lg-block"> 
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/">Shop<i className="fa fa-angle-down"></i></Link>
                                                <ul className="sub_menu pages">
                                                    <li><Link to="/shop">Store</Link></li>
                                                    <li><Link to="/cart">Cart</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">My Account <i className="fa fa-angle-down"></i></Link>
                                                <ul className="sub_menu pages">
                                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                                    
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                    <li><Link to="/cart">Cart</Link></li>
                                                    <li><Link to="/authentication">Login/Register</Link></li>
                                                    
                                                </ul>
                                            </li>
                                            <li><Link to="https://styleseat.com/" target="_blank" rel="noopener noreferrer">Booking</Link></li>
                                            <li><Link to="/faqs">FAQS</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>

                                    </div>
                                    <div className="mobile-menu d-lg-none">
                                        <nav>  
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About Us</Link></li>
                                                {/* eslint-disable-next-line */}
                                                <li><Link to="">Shop<i className="fa fa-angle-down"></i></Link>
                                                    <ul className="sub_menu pages">
                                                        <li><Link to="/shop">Store</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                        <li><Link to="/checkout">Checkout</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/">My Account <i className="fa fa-angle-down"></i></Link>
                                                    <ul className="sub_menu pages">
                                                        <li><Link to="/dashboard">Dashboard</Link></li>
                                                        
                                                        <li><Link to="/checkout">Checkout</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                        <li><Link to="/authentication">Login/Register</Link></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li><Link to="https://styleseat.com/" target="_blank" rel="noopener noreferrer">Booking</Link></li>
                                                <li><Link to="/faqs">FAQS</Link></li>
                                                <li><Link to="/contact">Contact Us</Link></li>
                                            </ul>
                                        </nav>      
                                    </div>
                                </div>    
                            </div>
                            <div className="col-lg-4">
                                <div className="search_area search_four search_five">
                                    <div className="search_dropdown">
                                       <a className="search_button" href><i className="fa fa-search"></i></a>
                                    </div>         
                                    <div className="shopping_cart cart_four">
                                        <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>

                                         {/* <!--mini cart--> */}
                                         <div className="mini_cart">
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <Link to="/cart"><img src="assets/img/cart/cart1.jpg" alt="" /></Link>
                                               </div>
                                                <div className="cart_info">
                                                    <Link to="/">Cart Product #1</Link>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href><i className="fa fa-times-circle"></i></a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <Link to="/cart"><img src="assets/img/cart/cart2.jpg" alt="" /></Link>
                                               </div>
                                                <div className="cart_info">
                                                    <Link to="/">Cart Product #2</Link>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href="/"><i className="fa fa-times-circle"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="total_price">
                                                <span> Subtotal:  </span>
                                                <span className="prices">  $160.00  </span>
                                            </div>
                                            <div className="cart_button">
                                                <Link to="/checkout"> Check out</Link>
                                                <Link to="/cart"> View Cart</Link>
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
                        <div className="close_btn"><Link to="/"><i className="zmdi zmdi-close"></i></Link></div>

                    </div>  
                    {/* <!--header bottom end-->    */}
                </div>  
            </header>
        )
    }
}
