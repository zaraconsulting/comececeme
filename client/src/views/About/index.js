import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                {/* <!--breadcrumbs area start--> */}
                <div className="breadcrumb-section about_bread">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li className="active">services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--breadcrumbs area end--> */}

                {/* <!--about section area --> */}
                <div className="about_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="about_title">
                                    <h1>Welcome to Come CeCe Me!</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about_thumb">
                                    <img src="assets/img/ship/about1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about_section_content">
                                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. </p>
                                    <p><span>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--about section end--> */}

                {/* <!--chose us area start--> */}
                <div className="choseus_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="chose_title">
                                    <h1>Why chose us?</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/cart/cart20.jpg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Reason #1</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/cart/cart21.jpg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Reason #2</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_chose">
                                    <div className="chose_icone">
                                        <img src="assets/img/cart/cart22.jpg" alt="" />
                                    </div>
                                    <div className="chose_content">
                                        <h3>Reason #3</h3>
                                        <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--chose us area end--> */}

                {/* <!--services img area--> */}
                <div className="srrvices_gallery about_gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single_services">
                                    <div className="services_thumb">
                                        <img src="assets/img/services/service2.jpg" alt="" />
                                    </div>
                                    <div className="services_content">
                                        <h3>TEAM MEMBER #1</h3>
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_services">
                                    <div className="services_thumb">
                                        <img src="assets/img/services/service1.jpg" alt="" />
                                    </div>
                                    <div className="services_content">
                                        <h3>TEAM MEMBER #2</h3>
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_services">
                                    <div className="services_thumb">
                                        <img src="assets/img/services/service3.jpg" alt="" />
                                    </div>
                                    <div className="services_content">
                                        <h3>TEAM MEMBER #3</h3>
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--services img end--> */}

                {/* <!--testimonials section start--> */}
                <div className="testimonial_are">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="testimonial_titile">
                                    <h1>What Our Custumers Say ?</h1>
                                </div>
                            </div>
                            <div className="testimonial_active owl-carousel">
                                <div className="col-12">
                                    <div className="single_testimonial">
                                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                        <img src="assets/img/cart/testimonial1.jpg" alt="" />
                                        <span className="name">Customer Name</span>
                                        <span className="job_title">CEO of Company</span>
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
                                <div className="col-12">
                                    <div className="single_testimonial">
                                        <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        <img src="assets/img/cart/testimonial2.jpg" alt="" />
                                        <span className="name">Kathy Young</span>
                                        <span className="job_title">CEO of SunPark</span>
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
                                <div className="col-12">
                                    <div className="single_testimonial">
                                        <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        <img src="assets/img/cart/testimonial3.jpg" alt="" />
                                        <span className="name">Kathy Young</span>
                                        <span className="job_title">CEO of SunPark</span>
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
                {/* <!--testimonials section end--> */}
            </div>
        )
    }
}
