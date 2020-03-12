import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!--footer area start--> */}
                <div className="footer_area">
                    <div className="container">
                        <div className="footer_top top_four">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_footer">
                                        <h3>Hair Facts</h3>
                                        <p>The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints and the retro tracksuit comes best styled with statement furry sliders.</p>
                                        <p>View more Hair Facts <Link to="/faqs">here</Link></p>
                                        <div className="footer_social">
                                            <ul>
                                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-rss"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_footer column_2">
                                        <h3>Information</h3>
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            {/* <li><Link to="#">Services</Link></li> */}
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms & Conditions</Link></li>
                                            <li><Link to="#">Return Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_footer column_2">
                                        <h3>My Account</h3>
                                        <ul>
                                            <li><Link to="/authentication">My Account</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            {/* <!-- <li><Link to="#">Validation</Link></li> */}
                                            {/* <li><Link to="#">Wishlist</Link></li> --> */}
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_footer column_3">
                                        <h3>Get in touch</h3>
                                        <ul>
                                            <li><i className="fa fa-home"></i> 123 Main Street, Chicago, IL 60654.</li>
                                            <li><i className="fa fa-phone"></i> (800) 123 456 789</li>
                                            <li><i className="fa fa-fax"></i> 123 456 789</li>
                                            <li><i className="fa fa-envelope-open-o"></i> <a href="mailto:comececeme@gmail.com">comececeme@gmail.com</a></li>
                                        </ul>
                                        <div className="footer-payment">
                                            <Link to="#"><img src="assets/img/visha/payment.png" alt="" /></Link>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright_area copyright_four">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="copyright_conent">
                                            <p>Copyright &copy; {new Date().getFullYear()} <Link to="/">Come CeCe Me</Link>. All Right Reserved.</p>
                                            <p>Website Developed by <Link to="">Zara Consulting, Inc.</Link></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="footer_menu text-right">
                                            <img src="https://via.placeholder.com/94/stuff.png?text=Logo" alt="" />
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--footer area end--> */}
            </div>
        )
    }
}
