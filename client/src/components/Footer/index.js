import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_area">
                <div className="container">
                    <div className="footer_top top_four">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single_footer">
                                    <h3>About Cosmetic</h3>
                                    <p>The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints and the retro tracksuit comes best styled with statement furry sliders.</p>
                                    <div className="footer_social">
                                        <ul>
                                            <li><a href="index.html"><i className="fa fa-facebook"></i> </a></li>
                                            <li><a href="index.html"><i className="fa fa-twitter"></i> </a></li>
                                            <li><a href="index.html"><i className="fa fa-rss"></i> </a></li>
                                            <li><a href="index.html"><i className="fa fa-google-plus"></i> </a></li>
                                            <li><a href="index.html"><i className="fa fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_footer column_2">
                                    <h3>Information</h3>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="index.html">Delivery Information</a></li>
                                        <li><a href="index.html">Privacy Policy</a></li>
                                        <li><a href="index.html">Terms & Conditions</a></li>
                                        <li><a href="index.html">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_footer column_2">
                                    <h3>My Account</h3>
                                    <ul>
                                        <li><a href="my-account.html">My account</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="index.html">Validation</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_footer column_3">
                                    <h3>Get in touch</h3>
                                    <ul>
                                        <li><i className="fa fa-home"></i> 123 Main Street, Anytown, CA 12345 USA.</li>
                                        <li><i className="fa fa-phone"></i> (800) 123 456 789</li>
                                        <li><i className="fa fa-fax"></i> 123 456 789</li>
                                        <li><i className="fa fa-envelope-open-o"></i> <a href="index.html">Contact@towerthemes.com</a></li>
                                    </ul>
                                    <div className="footer-payment">
                                        <a href="index.html"><img src="assets/img/visha/payment.png" alt="Stuff" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright_area copyright_four">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="copyright_conent">
                                    <p>Copyright &copy; 2018 <a href="index.html">Plazathemes</a>. All Right Reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="footer_menu text-right">
                                    <img src="assets/img/logo/logo2.png" alt="Stuff" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
