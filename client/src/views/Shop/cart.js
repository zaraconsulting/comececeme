import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div className="breadcrumb-section cart_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li className="active">cart</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}
                {/* <!--shopping cart area start --> */}
                <div className="shopping_cart_area">
                    <div className="container">
                        <form action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table_desc">
                                        <div className="cart_page table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product_remove">Delete</th>
                                                        <th className="product_thumb">Image</th>
                                                        <th className="product_name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product_quantity">Quantity</th>
                                                        <th className="product_total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="product_remove"><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
                                                        <td className="product_thumb"><Link to="#"><img src="assets/img/cart/cart17.jpg" alt="" /></Link></td>
                                                        <td className="product_name"><Link to="#">Product Name</Link></td>
                                                        <td className="product-price">$65.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" defaultValue="1" type="number" /></td>
                                                        <td className="product_total">$130.00</td>


                                                    </tr>

                                                    <tr>
                                                        <td className="product_remove"><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
                                                        <td className="product_thumb"><Link to="#"><img src="assets/img/cart/cart18.jpg" alt="" /></Link></td>
                                                        <td className="product_name"><Link to="#">Product Name</Link></td>
                                                        <td className="product-price">$90.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" defaultValue="1" type="number" /></td>
                                                        <td className="product_total">$180.00</td>


                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
                                                        <td className="product_thumb"><Link to="#"><img src="assets/img/cart/cart19.jpg" alt="" /></Link></td>
                                                        <td className="product_name"><Link to="#">Product Name</Link></td>
                                                        <td className="product-price">$80.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" defaultValue="1" type="number" /></td>
                                                        <td className="product_total">$160.00</td>


                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart_submit">
                                            <button type="submit">update cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--coupon code area start--> */}
                            <div className="coupon_area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code">
                                            <h3>Coupon</h3>
                                            <div className="coupon_inner">
                                                <p>Enter your coupon code if you have one.</p>
                                                <input placeholder="Coupon code" type="text" />
                                                <button type="submit">Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code">
                                            <h3>Cart Totals</h3>
                                            <div className="coupon_inner">
                                                <div className="cart_subtotal">
                                                    <p>Subtotal</p>
                                                    <p className="cart_amount">$215.00</p>
                                                </div>
                                                <div className="cart_subtotal ">
                                                    <p>Shipping</p>
                                                    <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                                                </div>
                                                <Link to="#">Calculate shipping</Link>

                                                <div className="cart_subtotal">
                                                    <p>Total</p>
                                                    <p className="cart_amount">$215.00</p>
                                                </div>
                                                <div className="checkout_btn">
                                                    <Link to="#">Proceed to Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--coupon code area end--> */}
                        </form>
                    </div>
                </div>
                {/* <!--shopping cart area end --> */}
            </div>
        )
    }
}
