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
                                        <li><a href="index.html"><i className="fa fa-phone"></i> 123456789</a></li>
                                        <li><a href="index.html"><i className="fa fa-envelope-open-o"></i> demo@towerthemes.com</a></li>
                                        <li>
                                            <div className="header_social">
                                                <ul>
                                                    <li><a href="index.html"><i className="fa fa-facebook"></i> </a></li>
                                                    <li><a href="index.html"><i className="fa fa-twitter"></i> </a></li>
                                                    <li><a href="index.html"><i className="fa fa-rss"></i> </a></li>
                                                    <li><a href="index.html"><i className="fa fa-google-plus"></i> </a></li>
                                                    <li><a href="index.html"><i className="fa fa-linkedin"></i> </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right_info text-right">
                                    <ul>
                                        <li className="currency"><a href="index.html">USD <i className="fa fa-angle-down"></i> </a>
                                            <ul className="dropdown_currency">
                                                <li><a href="index.html"> EURO</a></li>
                                                <li><a href="index.html"> RUB </a></li>
                                                <li><a href="index.html"> GBP </a></li>
                                            </ul>
                                        </li>
                                        <li className="language"><a href="index.html"> English  <i className="fa fa-angle-down"></i> </a>
                                            <ul className="dropdown_language">
                                                <li><a href="index.html">French</a></li>
                                                <li><a href="index.html">German </a></li>
                                                <li><a href="index.html">Italians</a></li>
                                            </ul>
                                        </li>
                                        <li className="top_links"><a href="index.html">My Account <i className="fa fa-angle-down"></i> </a>
                                            <ul className="dropdown_links">
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="cart.html">Cart </a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="login.html">Log In</a></li>
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
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="Stuff" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main_menu_inner">
                                    <div className="main_menu d-none d-lg-block">
                                        <ul>
                                            <li className="active"><a href="index.html">Home <i className="fa fa-angle-down"></i> </a>
                                                <ul className="sub_menu">
                                                    <li><a href="index.html">Fashion Home 1</a></li>
                                                    <li><a href="index-2.html">Fashion Home 2</a></li>
                                                    <li><a href="index-3.html">Fashion Home 3</a></li>
                                                    <li><a href="index-4.html">Cosmetic Home 1</a></li>
                                                    <li><a href="index-5.html">Cosmetic Home 2</a></li>
                                                    <li><a href="index-6.html">Cosmetic Home 3</a></li>
                                                    <li><a href="index-7.html">Cosmetic Home 4</a></li>
                                                    <li><a href="christmas.html">Christmas Home</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop <i className="fa fa-angle-down"></i> </a>
                                                <ul className="mega_menu">
                                                    <li><a href="index.html">Shop Layouts</a>
                                                        <ul>
                                                            <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                            <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                            <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                            <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                            <li><a href="shop-list.html">List View</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="index.html">other Pages</a>
                                                        <ul>
                                                            <li><a href="portfolio.html">portfolio</a></li>
                                                            <li><a href="portfolio-details.html">portfolio details</a></li>
                                                            <li><a href="cart.html">cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="my-account.html">my account</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>

                                                        </ul>
                                                    </li>
                                                    <li><a href="index.html">Product Types</a>
                                                        <ul>
                                                            <li><a href="single-product.html">product details</a></li>
                                                            <li><a href="product-grouped.html">product grouped</a></li>
                                                            <li><a href="product-sidebar.html">product sidebar</a></li>
                                                            <li><a href="product-gallery.html">product gallery</a></li>
                                                            <li><a href="product-slider.html">product slider</a></li>
                                                            <li><a href="variable-product.html">variable product</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">blog <i className="fa fa-angle-down"></i> </a>
                                                <ul className="mega_menu">
                                                    <li><a href="index.html">Blog Layouts</a>
                                                        <ul>

                                                            <li><a href="blog-details.html">blog details</a></li>
                                                            <li><a href="blog-details-sidebar.html">blog details Sidebar</a></li>
                                                            <li><a href="blog-none-sidebar.html">No Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="index.html">blog Pages</a>
                                                        <ul>
                                                            <li><a href="blog-none-sidebar.html">Author</a></li>
                                                            <li><a href="blog-sidebar.html">Category</a></li>
                                                            <li><a href="index.html">Blog tag</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="index.html">Post Formats</a>
                                                        <ul>
                                                            <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                                            <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                            <li><a href="blog-fullwidth.html">Gallery Format</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="index.html">pages <i className="fa fa-angle-down"></i> </a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="services.html">services</a></li>
                                                    <li><a href="faq.html">Frequently Questions</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="404.html">Error 404</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>

                                    </div>
                                    <div className="mobile-menu d-lg-none">
                                        <nav>
                                            <ul>
                                                <li><a href="index.html">Home</a>
                                                    <ul>
                                                        <li><a href="index.html">Fashion Home 1</a></li>
                                                        <li><a href="index-2.html">Fashion Home 2</a></li>
                                                        <li><a href="index-3.html">Fashion Home 3</a></li>
                                                        <li><a href="index-4.html">Cosmetic Home 1</a></li>
                                                        <li><a href="index-5.html">Cosmetic Home 2</a></li>
                                                        <li><a href="index-6.html">Cosmetic Home 3</a></li>
                                                        <li><a href="index-7.html">Cosmetic Home 4</a></li>
                                                        <li><a href="christmas.html">Christmas Home</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">shop</a>
                                                    <ul>
                                                        <li><a href="index.html">Shop Layouts</a>
                                                            <ul>
                                                                <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                                <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                                <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                                <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                                <li><a href="shop-list.html">List View</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="index.html">other Pages</a>
                                                            <ul>
                                                                <li><a href="portfolio.html">portfolio</a></li>
                                                                <li><a href="portfolio-details.html">portfolio details</a></li>
                                                                <li><a href="cart.html">cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                                <li><a href="my-account.html">my account</a></li>
                                                                <li><a href="wishlist.html">Wishlist</a></li>

                                                            </ul>
                                                        </li>
                                                        <li><a href="index.html">Product Types</a>
                                                            <ul>
                                                                <li><a href="single-product.html">product details</a></li>
                                                                <li><a href="product-grouped.html">product grouped</a></li>
                                                                <li><a href="product-sidebar.html">product sidebar</a></li>
                                                                <li><a href="product-gallery.html">product gallery</a></li>
                                                                <li><a href="product-slider.html">product slider</a></li>
                                                                <li><a href="variable-product.html">variable product</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">blog</a>
                                                    <ul>
                                                        <li><a href="index.html">Blog Layouts</a>
                                                            <ul>

                                                                <li><a href="blog-details.html">blog details</a></li>
                                                                <li><a href="blog-details-sidebar.html">blog details Sidebar</a></li>
                                                                <li><a href="blog-none-sidebar.html">No Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="index.html">blog Pages</a>
                                                            <ul>
                                                                <li><a href="blog-none-sidebar.html">Author</a></li>
                                                                <li><a href="blog-sidebar.html">Category</a></li>
                                                                <li><a href="index.html">Blog tag</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="index.html">Post Formats</a>
                                                            <ul>
                                                                <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                                                <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                                <li><a href="blog-fullwidth.html">Gallery Format</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html">pages</a>
                                                    <ul>
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="services.html">services</a></li>
                                                        <li><a href="faq.html">Frequently Questions</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="404.html">Error 404</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="search_area search_four search_five">
                                    <div className="search_dropdown">
                                        <a className="search_button" href="index.html"><i className="fa fa-search"></i> </a>
                                    </div>
                                    <div className="shopping_cart cart_four">
                                        <a href="index.html"><i className="fa fa-shopping-cart"></i> </a>

                                        {/* <!--mini cart--> */}
                                        <div className="mini_cart">
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="index.html"><img src="assets/img/cart/cart1.jpg" alt="Stuff" /></a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="index.html">Anastasia Beverly Hills</a>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href="index.html"><i className="fa fa-times-circle"></i> </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="index.html"><img src="assets/img/cart/cart2.jpg" alt="Stuff" /></a>
                                                </div>
                                                <div className="cart_info">
                                                    <a href="index.html">Bareminerals Illuminatings</a>
                                                    <span className="quantity">Qty: 1</span>
                                                    <span className="cart_price">$115.00</span>
                                                    <div className="cart_remove">
                                                        <a title="Remove this item" href="index.html"><i className="fa fa-times-circle"></i> </a>
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
                            <input placeholder="Search product..." type="text" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <div className="close_btn"><a href="index.html"><i className="zmdi zmdi-close"></i> </a></div>

                    </div>
                    {/* <!--header bottom end-->    */}
                </div>
            </header>
        )
    }
}
