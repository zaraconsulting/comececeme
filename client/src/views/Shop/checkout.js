import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./checkout.css";
import CreateScript from '../../components/CreateScript/CreateScript';

export default class Checkout extends Component {
    constructor() {
        super();
        this.scr1 = new CreateScript("https://js.braintreegateway.com/web/3.44.2/js/client.min.js");
        this.scr2 = new CreateScript("https://js.braintreegateway.com/web/3.44.2/js/hosted-fields.min.js");
        this.bt_api = new CreateScript("/braintree.js");
        this.state = {
            clientToken: ''
        };
    }

    fetchToken = () => {
        fetch('/shop/client_token')
            .then(res => res.json())
            .then(data => {
                this.setState({ clientToken: data });
            });
    }

    handleClick = e => {
        this.bt_api.createScript();
    }

    componentDidMount() {
        this.scr1.createScript();
        this.scr2.createScript();
    }

    componentDidUpdate() {
        console.log(this.state.clientToken);
    }

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
                                        <li className="active">checkout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}
                {/* <!--Checkout page section--> */}
                <div className="Checkout_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="user-actions mb-20">
                                    <h3>
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    Returning customer?
                                    <Link className="Returning" to="#" data-toggle="collapse" data-target="#checkout_login" aria-expanded="true">Click here to login</Link>

                                    </h3>
                                    <div id="checkout_login" className="collapse" data-parent="#accordion">
                                        <div className="checkout_info">
                                            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
                                            <form action="#">
                                                <div className="form_group mb-20">
                                                    <label>Username or email <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                                <div className="form_group mb-25">
                                                    <label>Password  <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                                <div className="form_group group_3 ">
                                                    <button type="submit">Login</button>
                                                    <label htmlFor="remember_box">
                                                        <input id="remember_box" type="checkbox" />
                                                        <span> Remember me </span>
                                                    </label>
                                                </div>
                                                <Link to="#">Lost your password?</Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-actions mb-20">
                                    <h3>
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    Returning customer?
                                    <Link className="Returning" to="#" data-toggle="collapse" data-target="#checkout_coupon" aria-expanded="true">Click here to enter your code</Link>

                                    </h3>
                                    <div id="checkout_coupon" className="collapse" data-parent="#accordion">
                                        <div className="checkout_info">
                                            <form action="#">
                                                <input placeholder="Coupon code" type="text" />
                                                <button type="submit">Apply coupon</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout_form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <form action="#">
                                        <h3>Billing Details</h3>
                                        <div className="row">

                                            <div className="col-lg-6 mb-20">
                                                <label>First Name <span>*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <label>Last Name  <span>*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <label>Company Name (if applicable)</label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <label htmlFor="country">country <span>*</span></label>
                                                <select name="cuntry" id="country" defaultValue="1">
                                                    <option value="1" readOnly>United States</option>
                                                </select>
                                            </div>

                                            <div className="col-12 mb-20">
                                                <label>Street address  <span>*</span></label>
                                                <input placeholder="House number and street name" type="text" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <label>Town / City <span>*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <label>State / County <span>*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <label>Phone<span>*</span></label>
                                                <input type="text" />

                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <label> Email Address   <span>*</span></label>
                                                <input type="text" />

                                            </div>
                                            <div className="col-12 mb-20">
                                                <input id="account" type="checkbox" data-target="createp_account" />
                                                <label htmlFor="account" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">Create an account?</label>

                                                <div id="collapseOne" className="collapse one" data-parent="#accordion">
                                                    <div className="card-body1">
                                                        <label> Account password   <span>*</span></label>
                                                        <input placeholder="password" type="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-20">
                                                <input id="address" type="checkbox" data-target="createp_account" />
                                                <label className="righ_0" htmlFor="address" data-toggle="collapse" data-target="#collapsetwo" aria-controls="collapseOne">Ship to a different address?</label>

                                                <div id="collapsetwo" className="collapse one" data-parent="#accordion">
                                                    <div className="row">
                                                        <div className="col-lg-6 mb-20">
                                                            <label>First Name <span>*</span></label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="col-lg-6 mb-20">
                                                            <label>Last Name  <span>*</span></label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label>Company Name</label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <div className="select_form_select">
                                                                <label htmlFor="countru_name">country <span>*</span></label>
                                                                <select name="cuntry" id="countru_name">
                                                                    <option readOnly value="1">United States</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 mb-20">
                                                            <label>Street address  <span>*</span></label>
                                                            <input placeholder="House number and street name" type="text" />
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label>Town / City <span>*</span></label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label>State / County <span>*</span></label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="col-lg-6 mb-20">
                                                            <label>Phone<span>*</span></label>
                                                            <input type="text" />

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label> Email Address   <span>*</span></label>
                                                            <input type="text" />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="order-notes">
                                                    <label htmlFor="order_note">Order Notes</label>
                                                    <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <form action="#">
                                        <h3>Your order</h3>
                                        <div className="order_table table-responsive mb-30">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> Product Name <strong> × 2</strong></td>
                                                        <td> $165.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Product Name <strong> × 2</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Product Name	<strong> × 2</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Product Name <strong> × 1</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Cart Subtotal</th>
                                                        <td>$215.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Shipping</th>
                                                        <td><strong>$5.00</strong></td>
                                                    </tr>
                                                    <tr className="order_total">
                                                        <th>Order Total</th>
                                                        <td><strong>$220.00</strong></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="payment_method">
                                            <div className="panel-default">
                                                <input id="payment" name="check_method" type="radio" data-target="createp_account" />
                                                <label htmlFor="payment" data-toggle="collapse" data-target="#method" aria-controls="method">Create an account?</label>

                                                <div id="method" className="collapse one" data-parent="#accordion">
                                                    <div className="card-body1">
                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel-default">
                                                <input id="payment_defult" name="check_method" type="radio" data-target="createp_account" />
                                                <label htmlFor="payment_defult" data-toggle="collapse" data-target="#collapsedefult" aria-controls="collapsedefult">PayPal <img src="assets/img/visha/papyel.png" alt="" /></label>

                                                <div id="collapsedefult" className="collapse one" data-parent="#accordion">
                                                    <div className="card-body1">
                                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order_button">
                                                <button type="button" onClick={this.handleClick} data-toggle="modal" id="#checkoutButton" data-target="#paymentModal">Proceed to Checkout</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Checkout page section end--> */}
                {/* Payment Modal */}
                <div className="modal fade" id="paymentModal" tabIndex="-1" role="dialog" aria-labelledby="paymentModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalCenterTitle">Card Information</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="cc-number">Card Number</label>
                                        <div type="text" name="cc-number" id="cc-number" className="form-control"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cc-date">Expiration Date</label>
                                        <div type="text" name="cc-date" id="cc-date" className="form-control"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cc-cvv">CVV</label>
                                        <div type="text" name="cc-cvv" id="cc-cvv" className="form-control"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cc-postal">Postal Code</label>
                                        <div type="text" name="cc-postal" id="cc-postal" className="form-control"></div>
                                    </div>
                                    <input type="hidden" name="nonce" id="nonce" />
                                    <input type="submit" id="submit" defaultValue="Purchase" className="btn btn-success" />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Payment Modal End */}
            </div>
        )
    }
}
