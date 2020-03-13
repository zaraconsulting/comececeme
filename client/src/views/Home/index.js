import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <!--slider area start--> */}
                <div className="slider_area slider_four slider_five">
                    <div className="slider_active owl-carousel">
                        <div className="single_slider slider_nine">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="slider_content">
                                            <h4>view our</h4>
                                            <h1>hair</h1>
                                            <p>products now</p>
                                            <Link to="">Shop our store</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single_slider slider_ten">
                            <div className="container-fluid">
                                <div className="row align-items-center p-0">
                                    <div className="col-12">
                                        <div className="slider_content content_four">
                                            <h4>view our</h4>
                                            <h1>hair bundles</h1>
                                            <p>products now</p>
                                            <Link to="">Shop the collection</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--slider area end--> */}

                {/* <!--new product start-->  */}
                <div className="new_product_area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="product_section_title">
                                    <h3>Our <br /> <strong>Featured</strong> <br /> hair</h3>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="tab-content tab_four tab_five">
                                    <div className="product_active owl-carousel">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product22.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product23.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product24.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product25.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product26.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product27.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product28.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product23.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product17.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product18.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product20.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--new product start-->  */}
                {/* <!--countdown section start-->  */}
                <div className="countdown_product count_four count_five">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="product_thumb countdown">
                                    <Link to="single-product.html"><img src="assets/img/product/product46.jpg" alt="" /></Link>
                                    <div className="count_hover">
                                        <Link to="single-product.html"><img src="assets/img/product/product47.jpg" alt="" /></Link>
                                    </div>
                                    <div className="sale_percent">
                                        <span>-4%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="countdown_product_content">
                                    <div className="product_name">
                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                    </div>
                                    <div className="product_ratting">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product_price">
                                        <span className="current_price">$65.00</span>
                                        <span className="old_price">$68.00</span>
                                    </div>
                                    <div className="product_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique saepe consectetur possimus perferendis, accusantium.</p>
                                    </div>
                                    <div className="product_timing">
                                        <div data-countdown="2020/12/15"></div>
                                    </div>
                                    <div className="product_action">
                                        <ul>
                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--countdown section end-->  */}

                {/* <!--new product start-->  */}
                <div className="new_product_area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="product_section_title">
                                    <h3>top <br /> <strong>Selling</strong> <br /> hair</h3>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="tab-content tab_four tab_five">
                                    <div className="product_active owl-carousel">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product25.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product20.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product26.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product27.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product24.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product25.jpg" alt="" />
                                                    </Link>
                                                    <div className="sale_percent">
                                                        <span>-4%</span>
                                                    </div>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product22.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product23.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product20.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product21.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product18.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--new product start-->  */}

                {/* <!--banner section area-->  */}
                <div className="banner_section_bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="banner_bg_content">
                                    <h3>A Single Step Hair Tip!</h3>
                                    <h2>Tip #1</h2>
                                    <h1>Tip #1</h1>
                                    <Link to="#">Click here for more!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--banner section end-->  */}
                {/* <!--new product start-->  */}
                <div className="new_product_area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="product_section_title">
                                    <h3>Our <br /> <strong className="current_year">{new Date().getFullYear()}</strong> <br />Trending  <br /> hair</h3>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="tab-content tab_four tab_five">
                                    <div className="product_active owl-carousel">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product20.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product21.jpg" alt="" />
                                                    </Link>
                                                    <div className="sale_percent">
                                                        <span>-4%</span>
                                                    </div>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product17.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product28.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product23.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product24.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product21.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product22.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product20.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to="single-product.html">
                                                        <img className="primary_img" src="assets/img/product/product18.jpg" alt="Product" />
                                                        <img className="secondary_img" src="assets/img/product/product17.jpg" alt="" />
                                                    </Link>
                                                    <div className="product_action">

                                                        <ul>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                            <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_name">
                                                        <h2><Link to="single-product.html">Product Name</Link></h2>
                                                    </div>
                                                    <div className="product_meta">
                                                        <div className="product_price">
                                                            <span className="current_price">$65.00</span>
                                                        </div>
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fa fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--new product start-->  */}

                {/* <!--newsletter area start--> */}
                <div className="newsletter_area news_four">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="newsletter_content">
                                    <h2>Get <span>10%</span> Discount</h2>
                                    <p>Subscribe to the Come CeCe Me mailing list to receive an update on special<br /> promotions, new products, other discount information and more</p>
                                    <form action="#">
                                        <input placeholder="Your email address" type="text" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--newsletter area end--> */}

                {/* <!--blog area start--> */}
                {/* <!-- <div className="blog_area blog_four">
                <div className="container">
                    <div className="section_title">
                        <div className="row">
                           <div className="col-12">
                               <h2>From Our Blog</h2>
                               <p>Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                           </div> 
                        </div>
                    </div> 
                    <div className="row">
                        <div className="blog_active owl-carousel">
                            <div className="col-lg-4">
                                <div className="single_blog">
                                    <div className="blog_thumb">
                                        <Link to="blog-details.html"><img src="assets/img/blog/blog6.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_title">
                                            <h3><Link to="blog-details.html">Blog image post</Link></h3>
                                        </div>
                                        <div className="blog_meta">
                                            <i className="fa-calendar fa"></i>
                                            <span className="post_date">october 10, 2018</span>
                                            <span className="comment"> <Link to="#">3  comments</Link></span>
                                        </div>
                                        <div className="blog_desc">
                                            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single_blog">
                                    <div className="blog_thumb">
                                        <Link to="blog-details.html"><img src="assets/img/blog/blog7.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_title">
                                            <h3><Link to="blog-details.html">Post with Gallery</Link></h3>
                                        </div>
                                        <div className="blog_meta">
                                            <i className="fa-calendar fa"></i>
                                            <span className="post_date">october 10, 2018</span>
                                            <span className="comment"> <Link to="#">3  comments</Link></span>
                                        </div>
                                        <div className="blog_desc">
                                            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single_blog">
                                    <div className="blog_thumb">
                                        <Link to="blog-details.html"><img src="assets/img/blog/blog8.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_title">
                                            <h3><Link to="blog-details.html">Post with Audio</Link></h3>
                                        </div>
                                        <div className="blog_meta">
                                            <i className="fa-calendar fa"></i>
                                            <span className="post_date">october 10, 2018</span>
                                            <span className="comment"> <Link to="#">3  comments</Link></span>
                                        </div>
                                        <div className="blog_desc">
                                            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single_blog">
                                    <div className="blog_thumb">
                                        <Link to="blog-details.html"><img src="assets/img/blog/blog9.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_title">
                                            <h3><Link to="blog-details.html">Post with Video</Link></h3>
                                        </div>
                                        <div className="blog_meta">
                                            <i className="fa-calendar fa"></i>
                                            <span className="post_date">october 10, 2018</span>
                                            <span className="comment"> <Link to="#">3  comments</Link></span>
                                        </div>
                                        <div className="blog_desc">
                                            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single_blog">
                                    <div className="blog_thumb">
                                        <Link to="blog-details.html"><img src="assets/img/blog/blog7.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_title">
                                            <h3><Link to="blog-details.html">Maecenas ultricies</Link></h3>
                                        </div>
                                        <div className="blog_meta">
                                            <i className="fa-calendar fa"></i>
                                            <span className="post_date">october 10, 2018</span>
                                            <span className="comment"> <Link to="#">3  comments</Link></span>
                                        </div>
                                        <div className="blog_desc">
                                            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --> */}
                {/* <!--blog area end--> */}

                {/* <!--shipping area start--> */}
                <div className="brand_area">
                    <div className="container">
                        <div className="row">
                            <div className="brand_active owl-carousel">
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand1.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand2.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand3.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand4.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand5.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand3.jpg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--shipping area end--> */}
                {/* <!--banner section area-->  */}
                <div className="banner_section banner_fullwidth">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-4">
                                <div className="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner17.jpg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner18.jpg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner19.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--banner section end--> */}
            </div>
        )
    }
}
