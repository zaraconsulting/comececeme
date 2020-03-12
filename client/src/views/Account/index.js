import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
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
                                        <li className="active">my account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}

                {/* <!-- my account start  --> */}
                <section className="main_content_area">
                    <div className="container">
                        <div className="account_dashboard">
                            <div className="row">
                                <div className="col-sm-12 col-md-3 col-lg-3">
                                    {/* <!-- Nav tabs --> */}
                                    <div className="dashboard_tab_button">
                                        <ul role="tablist" className="nav flex-column dashboard-list">
                                            <li><Link to="#dashboard" data-toggle="tab" className="nav-link active">Dashboard</Link></li>
                                            <li> <Link to="#orders" data-toggle="tab" className="nav-link">Orders</Link></li>
                                            {/* <!-- <li><Link to="#downloads" data-toggle="tab" className="nav-link">Downloads</Link></li> --> */}
                                            <li><Link to="#address" data-toggle="tab" className="nav-link">Addresses</Link></li>
                                            <li><Link to="#account-details" data-toggle="tab" className="nav-link">Account details</Link></li>
                                            <li><Link to="login.html" className="nav-link">logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-9 col-lg-9">
                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content dashboard_content">
                                        <div className="tab-pane fade show active" id="dashboard">
                                            <h3>Dashboard </h3>
                                            <p>From your account dashboard. you can easily check &amp; view your <Link to="#">recent orders</Link>, manage your <Link to="#">shipping and billing addresses</Link> and <Link to="#">Edit your password and account details.</Link></p>
                                        </div>
                                        <div className="tab-pane fade" id="orders">
                                            <h3>Orders</h3>
                                            <div className="coron_table table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>May 10, 2018</td>
                                                            <td><span className="success">Completed</span></td>
                                                            <td>$25.00 for 1 item </td>
                                                            <td><Link to="cart.html" className="view">view</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>May 10, 2018</td>
                                                            <td>Processing</td>
                                                            <td>$17.00 for 1 item </td>
                                                            <td><Link to="cart.html" className="view">view</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="downloads">
                                            <h3>Downloads</h3>
                                            <div className="coron_table table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Downloads</th>
                                                            <th>Expires</th>
                                                            <th>Download</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Reg Wig</td>
                                                            <td>May 10, 2019</td>
                                                            <td><span className="danger">Expired</span></td>
                                                            <td><Link to="#" className="view">Click Here To Download Your File</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Black Wig</td>
                                                            <td>Sep 11, 2019</td>
                                                            <td>Never</td>
                                                            <td><Link to="#" className="view">Click Here To Download Your File</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="address">
                                            <p>The following addresses will be used on the checkout page by default.</p>
                                            <h4 className="billing-address">Billing address</h4>
                                            <Link to="#" className="view">Edit</Link>
                                            <p><strong>John Joe</strong></p>
                                            <address>
                                                123 Sunny Ln<br />
                                                    Apt 53<br />
                                                        Sunnyville, CA 12345<br />
                                            </address>
                                            {/* <!-- <p>Bangladesh</p>    --> */}
                                        </div>
                                        <div className="tab-pane fade" id="account-details">
                                            <h3>Account details </h3>
                                            <div className="login">
                                                <div className="login_form_container">
                                                    <div className="account_login_form">
                                                        <form action="#">
                                                            <p>Already have an account? <Link to="#">Log in instead!</Link></p>
                                                            <div className="input-radio">
                                                                <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mr.</span>
                                                                <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mrs.</span>
                                                            </div> <br />
                                                            <label>First Name</label>
                                                            <input type="text" name="first-name" />
                                                            <label>Last Name</label>
                                                            <input type="text" name="last-name" />
                                                            <label>Email</label>
                                                            <input type="text" name="email-name" />
                                                            <label>Password</label>
                                                            <input type="password" name="user-password" />
                                                            <label>Birthdate</label>
                                                            <input type="text" placeholder="MM/DD/YYYY" value="" name="birthday" />
                                                            <span className="example">
                                                                (E.g.: 05/31/1970)
                                                        </span>
                                                            <br />
                                                            <span className="custom_checkbox">
                                                                <input type="checkbox" value="1" name="optin" />
                                                                <label>Receive offers from our partners</label>
                                                            </span>
                                                            <br />
                                                            <span className="custom_checkbox">
                                                                <input type="checkbox" value="1" name="newsletter" />
                                                                <label>Sign up for our newsletter<br /><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></label>
                                                            </span>
                                                            <div className="save_button primary_btn default_button">
                                                                <Link to="#">Save</Link>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- my account end   --> */}
            </div>
        )
    }
}
