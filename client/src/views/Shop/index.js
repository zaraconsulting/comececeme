import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Shop extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div class="breadcrumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb_content">
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li class="active">shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}

                {/* <!--shop wrapper area--> */}
                <div class="shop_area">
                    <div class="container">
                        <div class="row shop_reverse">
                            <div class="col-lg-3 col-md-12">
                                <div class="sidebar_widget">
                                    <div class="widget_list filter">
                                        <h2>Filter by price</h2>
                                        <form action="#">
                                            <div id="slider-range"></div>
                                            <input type="text" name="text" id="amount" />
                                            <button type="submit">Filter</button>
                                        </form>
                                    </div>
                                    <div class="widget_list categories">
                                        <h2>Hair categories</h2>
                                        <ul>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #1</Link> <span>(6)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #2</Link> <span>(10)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #3</Link> <span>(4)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #4</Link> <span>(4)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #5</Link> <span>(3)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #6</Link> <span>(5)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #7</Link> <span>(7)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Category #8</Link> <span>(9)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Uncategorized</Link> <span>(6)</span></li>

                                        </ul>
                                    </div>
                                    <div class="widget_list color">
                                        <h2>Color</h2>
                                        <ul>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Black</Link> <span>(4)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Blue</Link> <span>(5)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> Red</Link> <span>(3)</span></li>
                                            <li><Link to="#"><i class="fa fa-angle-right"></i> White</Link> <span>(7)</span></li>
                                        </ul>
                                    </div>
                                    <div class="widget_list compare">
                                        <h2>Compare products</h2>
                                        <div class="compare_product">
                                            <div class="cart_item">
                                                <div class="cart_img">
                                                    <Link to="cart.html"><img src="assets/img/cart/cart1.jpg" alt="" /></Link>
                                                </div>
                                                <div class="cart_info">
                                                    <Link to="#">PRODUCT NAME</Link>
                                                    <span class="quantity">Qty: 1</span>
                                                    <span class="cart_price">$115.00</span>
                                                    <div class="cart_remove">
                                                        <Link title="Remove this item" to="#"><i class="fa fa-times-circle"></i></Link>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="cart_item">
                                                <div class="cart_img">
                                                    <Link to="cart.html"><img src="assets/img/cart/cart2.jpg" alt="" /></Link>
                                                </div>
                                                <div class="cart_info">
                                                    <Link to="#">PRODUCT NAME</Link>
                                                    <span class="quantity">Qty: 1</span>
                                                    <span class="cart_price">$115.00</span>
                                                    <div class="cart_remove">
                                                        <Link title="Remove this item" to="#"><i class="fa fa-times-circle"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit">Compare</button>

                                    </div>
                                    <div class="widget_list tag-cloud">
                                        <h2>Tag products</h2>
                                        <div class="tag_widget">
                                            <ul>
                                                <li><Link to="#">Tag #1</Link></li>
                                                <li><Link to="#">Tag #2</Link></li>
                                                <li><Link to="#">Tag #3</Link></li>
                                                <li><Link to="#">Tag #4</Link></li>
                                                <li><Link to="#">Tag #5</Link></li>
                                                <li><Link to="#">Tag #6</Link></li>
                                                <li><Link to="#">Tag #7</Link></li>
                                                <li><Link to="#">Tag #8</Link></li>
                                                <li><Link to="#">Tag #9</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="widget_list widget_banner">
                                        <img src="assets/img/banner/banner26.jpg" alt="" />

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-12">
                                <div class="shop_wrapper">
                                    <div class="banner_slider">
                                        <img src="assets/img/banner/banner25.jpg" alt="" />
                                    </div>
                                    {/* <!--shop toolbar start--> */}
                                    <div class="shop_toolbar">
                                        <div class="list_button">
                                            <ul class="nav" role="tablist">
                                                <li>
                                                    <Link class="active" data-toggle="tab" to="#large" role="tab" aria-controls="large" aria-selected="true"><i class="fa fa-th-large"></i></Link>
                                                </li>
                                                <li>
                                                    <Link data-toggle="tab" to="#list" role="tab" aria-controls="list" aria-selected="false"><i class="fa fa-th-list"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="select_option">
                                            <form action="#">
                                                <select name="orderby" id="short">
                                                    <option selected value="1">Sort by popularity</option>
                                                    <option value="1">Sort by average rating</option>
                                                    <option value="1">Sort by recency</option>
                                                    <option value="1">Sort by price: low to high</option>
                                                    <option value="1">Sort by price: high to low</option>
                                                    {/* <!-- <option value="1">Hair Name: Z</option> --> */}
                                                </select>
                                            </form>
                                            <div class="page_amount">
                                                <p>Showing 1–9 of 21 results</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--shop toolbar end--> */}
                                    <div class="tab-content tab_four tab_six shop_list">
                                        <div class="tab-pane fade show active" id="large" role="tabpanel">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product20.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product21.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sale_percent">
                                                                <span>-4%</span>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product19.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product10.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product21.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product22.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product23.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product24.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product25.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product26.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product27.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product28.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product26.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product25.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product24.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product23.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="single_product">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product23.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product22.jpg" alt="" />
                                                            </Link>
                                                            <div class="product_action">

                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_meta">
                                                                <div class="product_price">
                                                                    <span class="current_price">$65.00</span>
                                                                </div>
                                                                <div class="product_ratting">
                                                                    <ul>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                        <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="list" role="tabpanel">
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product17.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product18.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product19.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product20.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">Aftershave Lotion</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product20.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product21.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product21.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product22.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">Aftershave Lotion</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product23.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product24.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product25.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product23.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product26.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product27.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">Aftershave Lotion</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product27.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product28.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">PRODUCT NAME</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product_list_item">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="product_thumb">
                                                            <Link to="single-product.html">
                                                                <img class="primary_img" src="assets/img/product/product17.jpg" alt="Hair" />
                                                                <img class="secondary_img" src="assets/img/product/product18.jpg" alt="" />
                                                            </Link>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="product_content">
                                                            <div class="product_name">
                                                                <h2><Link to="single-product.html">Aftershave Lotion</Link></h2>
                                                            </div>
                                                            <div class="product_price">
                                                                <span class="current_price">$65.00</span>
                                                                <span class="old_price">$68.00</span>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sunt quod sequi, distinctio debitis voluptatibus architecto inventore a doloribus culpa consequatur. Eveniet voluptates est maiores sunt sequi, quidem laboriosam enim.</p>
                                                            </div>
                                                            <div class="product_ratting">
                                                                <ul>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                    <li><Link to="#"><i class="fa fa-star"></i></Link></li>
                                                                </ul>
                                                            </div>

                                                            <div class="product_action">
                                                                <ul>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-refresh" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                                                                    <li><Link to="#" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--pagination style start-->  */}
                                    <div class="pagination_style">
                                        <div class="pagination">
                                            <ul>
                                                <li class="current">1</li>
                                                <li><Link to="#">2</Link></li>
                                                <li><Link to="#">3</Link></li>
                                                <li><Link to="#">next</Link></li>
                                                <li><Link to="#">>></Link></li>
                                            </ul>
                                        </div>
                                        <div class="page_amount">
                                            <p>Showing 1–9 of 21 results</p>
                                        </div>
                                    </div>
                                    {/* <!--pagination style end-->  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--shop wrapper start--> */}

                {/* <!--shipping area start--> */}
                <div class="brand_area brand_shop">
                    <div class="container">
                        <div class="row">
                            <div class="brand_active owl-carousel">
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand1.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand2.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand3.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand4.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand5.jpg" alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="single_brand">
                                        <Link to="#"><img src="assets/img/brand/brand3.jpg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--shipping area end--> */}
                {/* <!--banner section area-->  */}
                <div class="banner_section banner_fullwidth">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-lg-4 col-md-4">
                                <div class="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner17.jpg" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner18.jpg" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single_banner">
                                    <Link to="#"><img src="assets/img/banner/banner19.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--banner section end--></div> */}
            </div>
        )
    }
}
